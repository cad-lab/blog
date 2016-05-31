from browser import document as doc
from browser import window
from browser import html
from javascript import JSConstructor
import math
   
cango = JSConstructor(window.Cango)
shapedefs = window.shapeDefs
cobj = JSConstructor(window.Cobj)
creategeartooth = JSConstructor(window.createGearTooth)
cgo = cango("gear")

class Spur():
    def __init__(self, canvas_id):
        self.canvas_id = canvas_id

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
        cgo.render(gear)
        # 接著繪製齒輪的基準線
        deg = math.pi/180
        Line = cobj(['M', self.cx, self.cy, 'L', self.cx+pr*math.cos(self.theta*deg), self.cy+pr*math.sin(self.theta*deg)], "PATH", {
              'strokeColor':'blue', 'lineWidth': 1})
        cgo.render(Line)