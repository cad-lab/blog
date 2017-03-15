from browser import document as doc
from browser import window
from browser import html
import math
   
cango = window.Cango.new
shapedefs = window.shapeDefs
cobj = window.Cobj.new
creategeartooth = window.createGearTooth.new
#cgo = cango("gear")

class Spur():
    def __init__(self, canvas_id):
        self.canvas_id = canvas_id
        self.cgo = cango(self.canvas_id)

    def spur(self, cx, cy, m, n, pa, theta):
        self.cx = cx
        self.cy = cy
        self.m = m
        self.n = n
        self.pa = pa
        self.theta = theta
        pr = self.n*self.m/2
        data = creategeartooth(self.m, self.n, self.pa)  
        gearTooth = cobj(data, "SHAPE", {
                "fillColor":"#ddd0dd",
                "border": True,
                "strokeColor": "#606060" })
        #gearTooth.rotate(180/n) # rotate gear 1/2 tooth to mesh, 請注意 rotate 角度為 degree
        # theta 為角度
        gearTooth.rotate(self.theta) 
        gear = gearTooth.dup()
        # 利用單齒輪廓旋轉, 產生整個正齒輪外形
        for i in range(1, self.n):
            # 將 gearTooth 中的資料複製到 newTooth
            newTooth = gearTooth.dup()
            # 配合迴圈, newTooth 的齒形資料進行旋轉, 然後利用 appendPath 方法, 將資料併入 gear
            newTooth.rotate(360*i/self.n)
            # appendPath 為 Cango 程式庫中的方法, 第二個變數為 True, 表示要刪除最前頭的 Move to SVG Path 標註符號
            gear.appendPath(newTooth, True) # trim move command = True
          
        # 建立軸孔
        # add axle hole, hr 為 hole radius
        hr = 0.6*pr # diameter of gear shaft
        shaft = cobj(shapedefs.circle(hr), "PATH")
        shaft.revWinding()
        gear.appendPath(shaft) # retain the 'moveTo' command for shaft sub path
        gear.translate(self.cx, self.cy)
        # render 繪出靜態正齒輪輪廓
        self.cgo.render(gear)
        # 接著繪製齒輪的基準線
        deg = math.pi/180
        Line = cobj(['M', self.cx, self.cy, 'L', self.cx+pr*math.cos(self.theta*deg), self.cy+pr*math.sin(self.theta*deg)], "PATH", {
              'strokeColor':'blue', 'lineWidth': 1})
        self.cgo.render(Line)
        
    # 定義 sprocket
    # rs 為 roller rasius
    # pc 為 pitch
    def sprocket(self, cx, cy, rs, pc, n, theta):
        self.cx = cx
        self.cy = cy
        self.rs = rs
        self.pc = pc
        self.n = n
        self.pa = pa
        self.theta = theta
        rotangle = 360/self.n
        pr = self.pc/2/math.sin((rotangle/2)*math.pi/180)
        pt1x = pr-rs
        pt1y = 0
        pt2x = pr-(pr-pr*math.cos(rotangle*math.pi/180))*rs/pc
        pt2y = (pr*math.sin(rotangle*math.pi/180))*rs/pc
        ptmx = pr-(pr-pr*math.cos(rotangle*math.pi/180))*(0.5*pc)/pc
        ptmy = (pr*math.sin(rotangle*math.pi/180))*(0.5*pc)/pc
        lenmto3 = math.sqrt(math.pow(pc-rs,2)-math.pow(pc*0.5, 2))
        lenztom = math.sqrt(math.pow(ptmx, 2)+math.pow(ptmy, 2))
        r3 = lenztom + lenmto3
        pt3x = r3*math.cos(0.5*rotangle*math.pi/180)
        pt3y = r3*math.sin(0.5*rotangle*math.pi/180)
        pt4x = pr-(pr-pr*math.cos(rotangle*math.pi/180))*(pc-rs)/pc
        pt4y = (pr*math.sin(rotangle*math.pi/180))*(pc-rs)/pc
        pt5x = (pr-rs)*math.cos(rotangle*math.pi/180)
        pt5y = (pr-rs)*math.sin(rotangle*math.pi/180)
        data = ['M', pt1x, pt1y, 'A', rs, rs, 0, 0, 0, pt2x, pt2y, \
        'A', pc-rs, pc-rs, 0, 0, 1, pt3x, pt3y, \
        'A', pc-rs, pc-rs, 0, 0, 1, pt4x, pt4y, \
        'A', rs, rs, 0, 0, 0, pt5x, pt5y]
        sprocketTooth = cobj(data, "SHAPE", {
                "fillColor":"#ddd0dd",
                "border": True,
                "strokeColor": "#606060" })
        # theta 為 degree
        sprocketTooth.rotate(self.theta) 
        sprocket = sprocketTooth.dup()
        # 利用單齒輪廓旋轉, 產生整個齒盤外形
        for i in range(1, self.n):
            # 將 sprocketTooth 中的資料複製到 newTooth
            newTooth = sprocketTooth.dup()
            # 配合迴圈, newTooth 的齒形資料進行旋轉, 然後利用 appendPath 方法, 將資料併入 gear
            newTooth.rotate(360*i/self.n)
            # appendPath 為 Cango 程式庫中的方法, 第二個變數為 True, 表示要刪除最前頭的 Move to SVG Path 標註符號
            sprocket.appendPath(newTooth, True) # trim move command = True
        # 建立軸孔
        # add axle hole, hr 為 hole radius
        hr = 0.6*pr # diameter of gear shaft
        shaft = cobj(shapedefs.circle(hr), "PATH")
        shaft.revWinding()
        sprocket.appendPath(shaft) # retain the 'moveTo' command for shaft sub path
        sprocket.translate(self.cx, self.cy)
        # render 繪出靜態正齒輪輪廓
        self.cgo.render(sprocket)
        # 接著繪製齒盤的基準線
        deg = math.pi/180
        Line = cobj(['M', self.cx, self.cy, 'L', self.cx+pr*math.cos(self.theta*deg), self.cy+pr*math.sin(self.theta*deg)], "PATH", {
              'strokeColor':'blue', 'lineWidth': 1})
        self.cgo.render(Line)

# 將繪製鏈條輪廓的內容寫成 class 物件
class Chain():
    def __init__(self, canvas_id):
        self.canvas_id = canvas_id
        self.cgo = cango(self.canvas_id)

    def chain(self, x, y, rs, pc, theta, render=True):
        self.x = x
        self.y = y
        self.rs = rs
        self.pc = pc
        self.theta = theta
        self.render = render
        # rs 為 roller rasius
        # pc 為 pitch
        # 以水平作為起始角度, 左邊圓心位於原點, 左右圓半徑為 rs = 7, pc 為 20, 上下圓弧半徑為 20
        cx = 0
        cy = 0
        c2x = cx + self.pc
        c2y = cy
        # upper arc center coord
        ucx = self.pc/2
        ucy = math.sqrt(math.pow(self.rs+self.pc, 2)-math.pow(0.5*self.pc, 2))
        # down side arc center coord
        dcx = ucx
        dcy = -math.sqrt(math.pow(self.rs+self.pc, 2)-math.pow(0.5*self.pc, 2))
        # 上方左邊切點座標
        pt1x = cx+(ucx-cx)*(self.rs/(self.pc+self.rs))
        pt1y = cy+(ucy-cy)*(self.rs/(self.pc+self.rs)) 
        pt2x = cx+(dcx-cx)*(self.rs/(self.pc+self.rs))
        pt2y = cy+(dcy-cy)*(self.rs/(self.pc+self.rs))
        pt3x = c2x+self.rs*(dcx-c2x)/(self.pc+self.rs)
        pt3y = c2y+self.rs*(dcy-c2y)/(self.pc+self.rs)
        pt4x = c2x+self.rs*(ucx-c2x)/(self.pc+self.rs)
        pt4y = c2y+self.rs*(ucy-c2y)/(self.pc+self.rs)
        
        # 輪廓的外型設為成員變數
        data = ['M', pt1x, pt1y, \
                'A', self.rs, self.rs, 0, 1, 1, pt2x, pt2y, \
                'A', self.pc, self.pc, 0, 0, 0, pt3x, pt3y, \
                'A', self.rs, self.rs, 0, 1, 1, pt4x, pt4y, \
                'A', self.pc, self.pc, 0, 0, 0, pt1x, pt1y, 'z']
    
        chain = cobj(data, "SHAPE", {
                "fillColor":"#ddd0dd",
                "border": True,
                "strokeColor": "#606060" })
        
        hole1 = cobj(shapedefs.circle(self.rs/1.5), "PATH")
        hole1.translate(cx, cy)
        hole1.revWinding()
        chain.appendPath(hole1)
        hole2 = cobj(shapedefs.circle(self.rs/1.5), "PATH")
        hole2.translate(c2x, c2y)
        hole2.revWinding()
        chain.appendPath(hole2)
       # theta is degree
        chain.rotate(self.theta)
        chain.translate(self.x, self.y)
        if self.render == True:
            self.cgo.render(chain)
        deg = math.pi/180
        x2 = cx + self.x+ self.pc*math.cos(self.theta*deg)
        y2 = cy + self.y+ self.pc*math.sin(self.theta*deg)
        return x2, y2