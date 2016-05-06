var tipuesearch = {"pages":[{"title":"About","text":"CAD 實驗室 CADLab 為台灣國立虎尾科技大學, 機械設計工程系, 電腦輔助設計室, 全稱為 Computer Aided Design Laboratory (縮寫為 CADLab), Department of Mechanical Design Engineering, National Formosa University, Taiwan. CADLab 電腦輔助設計室配備 63 +1 台桌上型電腦, 以及下列相關內容管理網站: CADLab 靜態網誌: http://cadlab.mde.tw (具內容版次管理, 可在本地端與遠端全面佈署使用) CADLab 動態網誌: http://wordpress-cadlab.rhcloud.com (內容無版次管理, 但方便多人即時線上編輯內容, 部份內容可與靜態網誌同步) CADLab 內容管理網站: http://cmsimply-cadlab.rhcloud.com (專門用來收集資料, 集結構思, 編寫章節式文章用) CADLab WIKI: https://github.com/cad-lab/blog/wiki (附屬在 Github, 專門提供內容協同者統一訊息用) CADLab 雲端應用程式: http://2016spring-cadlab.rhcloud.com/ ( Python3 wsgi 應用程式展示用) 伺服主機 http://101.mde.tw","tags":"misc","url":"http://cadlab.mde.tw/post/pages/about/"},{"title":"Wordpress 網誌文章中的網際程式碼","text":"從 SVG 歷史 與 WebGL 歷史 , 以及 socket.io 歷史 , 也許不難發現, 多人協同在瀏覽器為基礎的應用程式環境, 已然成型.Pelican 靜態網頁與 Wordpress 的整合方案 儘管如此, 要將所有的工作全時在網路連線的環境中完成, 可能仍言之過早, 比較讓人確定的是, 多點觸控的平台伴隨著本地端的桌機或者是筆電, 還會繼續是主流的電腦輔助設計環境. 在這樣的所謂 Web Based (網際) 環境中, 身為一位機械設計工程師, 除了要關注傳統的 2D/3D 靜態與動態內容表達外, 能否逐步導入多點觸控裝置的資料, 便成為重點. 以網際 2D 繪圖而言, 2013 年推出的 http://snapsvg.io/ , 就是一套能夠順應未來電腦輔助機械設計繪圖的工具之一. 從 導入 Brython 與 Snap.svg 網際繪圖 的說明中, 我們已經知道能夠透過網際的 Brython 來呼叫並運用 snap.svg 程式庫, 但是假如希望完成如 Pelican 靜態網頁與 Wordpress 的整合方案 中所談到的資料整合, 並且導入 snap.svg 到 Wordpress 與 Pelican 網誌系統, 來需要注意到 Wordpress 對於內文中處理程式碼的用法, 否則由 Pelican 靜態網誌轉進 Wordpress 系統中的所有 Brython 或 Javascript 程式內容, 將會全數被 Wordpress 當作一般文字資料處理. 應對的方法很簡單, 只需要明確利用 html 的註解標註, 跳過 Wordpress 對於 Brython 與 Javascript 程式碼的額外處理就行. 以下舉 Snap.svg 典型的動態模擬為例: //<!-- window.onload=function(){ brython(1); } //--> #<!-- from javascript import JSConstructor from browser import alert from browser import window, document # 透過 window 與 JSConstructor 從 Brython 物件 snap 擷取 Snap 物件的內容 snap = JSConstructor(window.Snap) # 使用 id 為 \"svgout\" 的 svg 標註進行繪圖 s = snap(\"#svgout\") offsetY = 50 # 是否標示出繪圖範圍 #borderRect = s.rect(0,0,800,640,10,10).attr({ 'stroke': \"silver\", 'fill': \"silver\", 'strokeWidth': \"3\" }) g = s.group().transform('t250,120') r0 = s.rect(150,150,100,100,20,20).attr({ 'fill': \"orange\", 'opacity': \"0.8\", 'stroke': \"black\", 'strokeWidth': \"2\" }) c0 = s.circle(225,225,10).attr({ 'fill': \"silver\", 'stroke': \"black\", 'strokeWidth': \"4\" }).attr({ 'id': 'c0' }) g0 = s.group( r0,c0 ).attr({ 'id': 'g0' }) #g0.animate({ 'transform' : 't250,120r360,225,225' },4000) g0.appendTo( g ) g0.animate({ 'transform' : 'r360,225,225' },4000) # 讓 g0 可以拖動 g0.drag() r1 = s.rect(100,100,100,100,20,20).attr({ 'fill': \"red\", 'opacity': \"0.8\", 'stroke': \"black\", 'strokeWidth': \"2\" }) c1 = s.circle(175,175,10).attr({ 'fill': \"silver\", 'stroke': \"black\" , 'strokeWidth': \"4\"}).attr({ 'id': 'c1' }) g1 = s.group( r1,c1 ).attr({ 'id': 'g1' }) g1.appendTo( g0 ).attr({ 'id': 'g1' }) g1.animate({ 'transform' : 'r360,175,175' },4000) r2 = s.rect(50,50,100,100,20,20).attr({ 'fill': \"blue\", 'opacity': \"0.8\", 'stroke': \"black\", 'strokeWidth': \"2\" }) c2 = s.circle(125,125,10).attr({ 'fill': \"silver\", 'stroke': \"black\", 'strokeWidth': \"4\" }).attr({ 'id': 'c2' }) g2 = s.group(r2,c2).attr({ 'id': 'g2' }) g2.appendTo( g1 ); g2.animate( { 'transform' : 'r360,125,125' },4000); r3 = s.rect(0,0,100,100,20,20).attr({ 'fill': \"yellow\", 'opacity': \"0.8\", 'stroke': \"black\", 'strokeWidth': \"2\" }) c3 = s.circle(75,75,10).attr({ 'fill': \"silver\", 'stroke': \"black\", 'strokeWidth': \"4\" }).attr({ 'id': 'c3' }) g3 = s.group(r3,c3).attr({ 'id': 'g3' }) g3.appendTo( g2 ) g3.animate( { 'transform' : 'r360,75,75' },4000) r4 = s.rect(-50,-50,100,100,20,20).attr({ 'fill': \"green\", 'opacity': \"0.8\", 'stroke': \"black\", 'strokeWidth': \"2\" }) c4 = s.circle(25,25,10).attr({ 'fill': \"silver\", 'stroke': \"black\", 'strokeWidth': \"4\" }).attr({ 'id': 'c4' }) g4 = s.group(r4,c4).attr({ 'id': 'g4' }); g4.appendTo( g3 ) g4.animate( { 'transform' : 'r360,25,25' },4000) #--> Brython 程式碼: <script type=\"text/javascript\" src=\"http://brython.info/src/brython_dist.js\"></script> <script type=\"text/javascript\" src=\"https://cdnjs.cloudflare.com/ajax/libs/snap.svg/0.4.1/snap.svg-min.js\"></script> <script> //<!-- window.onload=function(){ brython(1); } //--> </script> <svg width=\"800\" height=\"600\" viewBox=\"0 0 800 600\" id=\"svgout\"></svg> <script type=\"text/python\"> #<!-- from javascript import JSConstructor from browser import alert from browser import window, document # 透過 window 與 JSConstructor 從 Brython 物件 snap 擷取 Snap 物件的內容 snap = JSConstructor(window.Snap) # 使用 id 為 \"svgout\" 的 svg 標註進行繪圖 s = snap(\"#svgout\") offsetY = 50 # 是否標示出繪圖範圍 #borderRect = s.rect(0,0,800,640,10,10).attr({ 'stroke': \"silver\", 'fill': \"silver\", 'strokeWidth': \"3\" }) g = s.group().transform('t250,120') r0 = s.rect(150,150,100,100,20,20).attr({ 'fill': \"orange\", 'opacity': \"0.8\", 'stroke': \"black\", 'strokeWidth': \"2\" }) c0 = s.circle(225,225,10).attr({ 'fill': \"silver\", 'stroke': \"black\", 'strokeWidth': \"4\" }).attr({ 'id': 'c0' }) g0 = s.group( r0,c0 ).attr({ 'id': 'g0' }) #g0.animate({ 'transform' : 't250,120r360,225,225' },4000) g0.appendTo( g ) g0.animate({ 'transform' : 'r360,225,225' },4000) # 讓 g0 可以拖動 g0.drag() r1 = s.rect(100,100,100,100,20,20).attr({ 'fill': \"red\", 'opacity': \"0.8\", 'stroke': \"black\", 'strokeWidth': \"2\" }) c1 = s.circle(175,175,10).attr({ 'fill': \"silver\", 'stroke': \"black\" , 'strokeWidth': \"4\"}).attr({ 'id': 'c1' }) g1 = s.group( r1,c1 ).attr({ 'id': 'g1' }) g1.appendTo( g0 ).attr({ 'id': 'g1' }) g1.animate({ 'transform' : 'r360,175,175' },4000) r2 = s.rect(50,50,100,100,20,20).attr({ 'fill': \"blue\", 'opacity': \"0.8\", 'stroke': \"black\", 'strokeWidth': \"2\" }) c2 = s.circle(125,125,10).attr({ 'fill': \"silver\", 'stroke': \"black\", 'strokeWidth': \"4\" }).attr({ 'id': 'c2' }) g2 = s.group(r2,c2).attr({ 'id': 'g2' }) g2.appendTo( g1 ); g2.animate( { 'transform' : 'r360,125,125' },4000); r3 = s.rect(0,0,100,100,20,20).attr({ 'fill': \"yellow\", 'opacity': \"0.8\", 'stroke': \"black\", 'strokeWidth': \"2\" }) c3 = s.circle(75,75,10).attr({ 'fill': \"silver\", 'stroke': \"black\", 'strokeWidth': \"4\" }).attr({ 'id': 'c3' }) g3 = s.group(r3,c3).attr({ 'id': 'g3' }) g3.appendTo( g2 ) g3.animate( { 'transform' : 'r360,75,75' },4000) r4 = s.rect(-50,-50,100,100,20,20).attr({ 'fill': \"green\", 'opacity': \"0.8\", 'stroke': \"black\", 'strokeWidth': \"2\" }) c4 = s.circle(25,25,10).attr({ 'fill': \"silver\", 'stroke': \"black\", 'strokeWidth': \"4\" }).attr({ 'id': 'c4' }) g4 = s.group(r4,c4).attr({ 'id': 'g4' }); g4.appendTo( g3 ) g4.animate( { 'transform' : 'r360,25,25' },4000) #--> </script>","tags":"導引","url":"http://cadlab.mde.tw/post/wordpress-wang-zhi-wen-zhang-zhong-de-wang-ji-cheng-shi-ma.html"},{"title":"Onshape 提供免費教育單位帳號","text":"從 https://www.onshape.com/cad-blog/introducing-the-onshape-education-plan 得知, Onshpae 除了提供各種身份的用戶有使用限度的免費帳號以外, 從 2016.04.07 開始更加碼, 讓教育單位可以免費, 且沒有使用限度的情況下, 來探索使用這個劃時代的雲端電腦輔助機械設計套件. 穩定的網路連線是使用 Onshpae 的必要條件 假如電腦教室網路連線穩定, 六十名學生可以同時利用 Firefox 或 Chrome, 登入到 Onshape 執行協同產品設計, 登記免費的教育單位專用帳號後, 只要完成電子郵箱驗證, 就會自動登入系統. Onshape 的 Document 是專案容器 登入後, 可以利用左側的 Tutorials & Samples 來了解 Onshpae 的用法: Onshape 中的 Documents 為設計專案層次 (Project level) 的文件庫 (Container), 可以納入 3D 零件, 3D 組件, 工程圖, 以及從外部轉入的各式檔案. Onshape 操作無需存檔, 而且保有流程版本 在 Onshpae 環境中操作零件繪圖, 使用者無需手動存檔, 只要完成任何操作, 都會自動儲存版本, 而且可以在各版本之間遊走. 登入 Onshape, 就可以利用左上角的 Create 按鈕建立 Document 專案文件, 然後再利用左下角的 + 號, 選擇要建立零件, 組件, 工程圖或者是從本地端上傳各式文件. 假如是建立零件, 與其他 MCAD 套件類似, 可以選擇 Sketch 再選擇作圖平面, 或者先選擇作圖平面, 再選擇 Sketch 繪製平面輪廓, 輪廓繪圖, 可以直接在 3D 環境畫圖, 或者利用滑鼠右鍵帶出 View normal to sketch plane 的功能, 以垂直繪圖面的平面上進行繪圖. Onshape 可以轉出各式檔案 各種基本的平面繪圖與尺寸標定或約束條件設定, 都與其他傳統的單機 MCAD 大同小異, 雖然 Onshape 與 Solid Edge 採用相同的 PARASOLID kernel, 但是所有的零組件檔案, 可以直接以點選下方的零組件 Tab, 再以滑鼠右鍵帶出 Export 功能, 然後轉成 PARASOLID 或 ACIS 核心檔,甚至也能直接轉成 Solidworks 格式檔案, 當然也能轉成 IGES, STEP, RHINO, STL 等格式. Onshape 擁有直覺的組立約束 當使用者在 Onshape 零件繪製模式下完成基本零件, 就可以利用左下方的 + 建立組立檔, 將各零件一一放入進行組裝. Fastened mate 主要用於焊接式的組合, 約束條件置入後, 兩個零件間已經沒有任何自由度而結為一體. Revolute mate 主要用於旋轉軸式的組合, 約束條件置入後, 兩個零件間只留下一個旋轉自由度. Slider mate 主要用於滑塊式的組合, 約束條件置入後, 兩個零件間只留下一個平移自由度. Planar mate 主要用於面接式組合, 約束條件置入後, 兩個零件面對面靠接, 只允許兩個方向的移動自由度, 以及垂直靠接面方向的一個旋轉自由度. Pin slot mate 主要用於插銷式組合, 約束條件置入後, 兩個零件具有旋轉與側向平移等兩個自由度. Ball mate 主要用於球接頭式的組合, 約束條件置入後, 將保留3個方向的旋轉自由度. Tangent mate 則是比較特殊的相切組立, 約束條件置入後, 兩個零件將始終保持相切的關係. 簡單的組立應用 根據上述基本功能, 就可以完成下列腳踏車鏈條的基本組立: 教育版對應帳號下所完成的 Bike chain Document .","tags":"導引","url":"http://cadlab.mde.tw/post/onshape-ti-gong-mian-fei-jiao-yu-dan-wei-zhang-hao.html"},{"title":"CADLab 學員卡片電腦規格與應用","text":"卡片電腦 (credit-card sized computer) 的盛行, 除了在操作系統上有機會讓 CADLab 的學員, 得以學習 Windows 10 以外的應用, 最大的功用, 是讓機械設計工程專長的學員能夠實際動手, 理解網路的整合, 並且迎接自造 (self-manufacturing) 時代的蒞臨. Raspberry Pi 3 電腦 當一間嚴格管理, 軟硬體配置僵化的 CADLab 電腦輔助設計室已經無法滿足現代機械設計科技人才的培育使用時, 導入以 Raspberry Pi 3 Model B 為基礎的個人隨身卡片電腦, 應該是個不錯的選擇. 2016 年 2 月份推出的這一片採用 1.2GHz 64-bit quad-core ARMv8 CPU 的小卡片電腦, 不僅能夠用來控制 http://delta.firepick.org/ , 可以安裝執行 Jupyter hub , 而且在 Noobs 操作系統套件中, 還 內建 免費的非營利版 Mathematica. 以下是我們建議學員自備的 Raspberry Pi 3 Model B 卡片電腦規格: 處理器: Broadcom BCM2387 晶片組，1.2GHz 四核心 ARM Cortex-A53.802.11 b/g/n 無線 LAN 和藍牙 4.1 GPU: 雙核心 VideoCore IVR 多媒體協同處理器。提供 Open GL ES 2.0、硬體加速 OpenVG，以及 1080p30 H.264 高型解碼。支援 1Gpixel/s、1.5Gtexel/s 或 24GFLOPs，並具備材質過濾功能與 DMA 基礎架構 記憶體: 1GB LPDDR2 作業系統: 由 Micro SD 記憶卡(建議使用 32 GB 以上) 啟動，建議安裝 Raspbian 操作系統 尺寸: 85 x 56 x 17mm 電源: Micro USB 插槽 5V1，2.5A Raspbian 安裝配置 當學員拿到 Raspberry Pi 3 卡片電腦之後, 首次配置時, 建議使用 CADLab 教室中的 HDMI 線連接到支援 HDMI 的電腦螢幕後, 進行 Raspbian 操作系統的安裝, 安裝後則必須開啟 SSH 的連線, 並且編輯 /etc/lightdm/lightdm.conf 設定檔, 將 [XDMCPServer] 項下的 enabled 設為 true. CADLab 卡片電腦使用情境 完成 Raspbin 系統安裝後, Raspberry Pi 3 電腦在 CADLab 教室使用, 共有兩種基本情境: 連接滑鼠鍵盤螢幕開機 目前的 CADLab 電腦配置, USB 鍵盤與滑鼠的接頭是採隱藏式保護, 因此學員無法直接以公用的滑鼠與鍵盤連接 Raspberry Pi 3 卡片電腦, 但是若新配置的新電腦設備允許學員使用公用的 USB 鍵盤與滑鼠, 並且提供支援 HDMI 格式的電腦螢幕, 用戶就可以很單純直接用自行攜入的 Raspberry Pi 3 開機使用. 開機後, 可以透過 CADLab 中的 Wifi 連線 (Raspberry Pi 3 Model B 內建 802.11n Wireless LAN) 或實體線 (每桌必須提供 4 或 8 port hub) 上網, 使用較為簡單. 無滑鼠鍵盤螢幕開機 若新配置的 CADLab 電腦設備並不允許學員使用公用的滑鼠與鍵盤, 且桌上並無 hub 可用, 則建議 Raspberry Pi 3 使用者, 可以自帶一條網路跳線, 利用桌上型電腦的多 NIC 連線, 以 https://sourceforge.net/projects/dhcpserver/ 發給 Raspberry Pi 3 電腦臨時的內部網路 IP, 然後再利用 https://sourceforge.net/projects/xming/ , 以 XDMCP 協定 (只建議在內部網路使用, 廣域網路上, 建議採較安全的 SSH 連線), 登入 Raspberry Pi 3, 並且以 Wifi 連線到 CADLab 的 Access Point 後, 確定連線的 IP 位址後, 就可以移除與桌上型電腦的網路跳線, 改採與桌上型電腦同位階的內部網路上網, 然後透過桌上型電腦的 Putty, 以 SSH 連線到 Raspberry Pi 3 進行操控, 或者再透過 xming, 以 XDMCP 協定登入. 另外, 假如 Raspberry Pi 3 電腦並無與電腦教室其他電腦設備連線的要求, 用戶希望利用網路跳線與桌機相連後上網, 則建議在桌機上使用代理程式 http://www.youngzsoft.net/ccproxy/ 的免費版 (可以3個用戶使用), 讓 Raspberry pi 3 電腦以桌機的 proxy server 上網, 或者設法將桌上型電腦 Windows 7 或 10 操作系統上的第2片網路卡橋接到第1片已經上網的網卡上, Raspberry Pi 3 就可以藉此設定直接上網.","tags":"參考","url":"http://cadlab.mde.tw/post/cadlab-xue-yuan-qia-pian-dian-nao-gui-ge-yu-ying-yong.html"},{"title":"CADLab 機械設計系網路配置圖","text":"我們正在使用 Python3 與 http://blockdiag.com/en/ 中的 nwdiag 工具繪製機械設計工程系的網路配置圖. 從 機械設計專題的表達、技術領域與考量層面 範例, 可以了解利用文字描述轉成 2D 流程圖, 具有容易修改維護的優點, 這裡運用相同的概念, 嘗試利用類似的 nwdiag 工具, 畫出整個系的網路配置圖. blockdiag 與 nwdiag 若能夠搭配全球資訊網路上的 Python3 wsgi 程式, 採用資料庫系統來管理機械設計工程系的網路資源配置, 將可以實際納為 網際內容管理 課程的教材. 上述 CADLab 網路配置圖對應的 nwdiag 描述文件: nwdiag { default_fontsize = 15; 校主幹 [shape = cloud]; 校主幹 -- 系路由器; network 系主幹{ address = \"140.130.17.0/24\"; 系路由器 [address=\"140.130.17.254\"]; 雲端點名網路; 八樓集線器 [address=\"140.130.17.82\"]; 七樓集線器; 六樓集線器; 系伺服器群; } network 八樓主幹{ address=\"17.10-82\" 八樓集線器 [address=\"140.130.17.82\"]; 老師1伺服器群 [address=\"140.130.17.10-15\"]; 老師2伺服器群 [address=\"140.130.17.16-25\"]; 老師3伺服器群 [address=\"140.130.17.26-60\"]; } network CAD_CAE{ address=\"17.83\"; 八樓集線器 [address=\"140.130.17.82\"]; CAD_NAT [address=\"140.130.17.82\"]; CAE_NAT [address=\"140.130.17.83\"]; } network 電腦輔助設計室{ address=\"192.168.1.0/24\"; CAD_NAT [address=\"192.168.1.1\"]; CAD1 [address=\".2\"]; CAD2; CAD64 [address=\".100\"]; } network 電腦輔助繪圖室{ address=\"192.168.1.0/24\"; CAE_NAT [address=\"192.168.1.1\"]; CAE1 [address=\".2\"]; CAE2; CAE64 [address=\".100\"]; } network 七樓主幹{ address=\"140.130.17.83-90\" 七樓集線器; 老師4伺服器群 [address=\"140.130.17.61-63\"]; 老師5伺服器群 [address=\"140.130.17.64-70\"]; 老師6伺服器群 [address=\"140.130.17.71-75\"]; } network 六樓主幹{ address=\"140.130.17.91-100\" 六樓集線器; 老師7伺服器群 [address=\"140.130.17.76-78\"]; 老師8伺服器群 [address=\"140.130.17.79-80\"]; 老師9伺服器群 [address=\"140.130.17.81-95\"]; } }","tags":"規劃","url":"http://cadlab.mde.tw/post/cadlab-ji-jie-she-ji-xi-wang-lu-pei-zhi-tu.html"},{"title":"CADLab 學員網誌系統","text":"我們希望每一位 CADLab 電腦輔助設計室的學員都能夠充份利用現階段各種全球資訊網上的工具, 有效管理自己與團隊間的協同產品開發或學習過程的各種資訊. 這裡所謂的資訊包括: 口語資訊 Text 文字資訊 2D 圖面資訊 3D 動態資訊 系統模擬資訊 實體模型資訊 其中需要使用的工具包括 Python3, Leo Editor 以及 Pelican, 使用者若在 Windows 環境, 可以直接使用可攜套件: https://github.com/chiamingyen/kmol2016 . 而每位學員均可利用 http://www.cmsimply.com 來收集上述各種資訊內容, 然後再配合時機點與需求, 將資料分別同步到動態 Wordpress 網誌與 Pelican 靜態網誌. 目前所使用的 Leo Editor 網誌系統專案位於: https://github.com/cad-lab/manual , 學員可以在其中加入下列3個 Leo Editor 的指令按鈕, 讓內容與 Wordpress 動態網誌同步. #new-to-wordpress #coding: utf-8 import xmlrpc.client import datetime import os def get_cat_tag_content(data): # 請注意, 因為 data 來自 .md 的 body pan 內容, 第1行為 @language python # 用跳行符號分割 data_list = data.split(\"\\n\") #第2行為 title title= data_list[1] #第3行為 category category = data_list[2] #第4行為 tags tags = data_list[3] # 有多項資料的 content 型別為數列 # 再將第7行之後的資料數列串回成以跳行隔開的資料 content = \"\\n\".join(data_list[6:]) # 先將截斷摘要與內文的 pelican md 檔按符號, 換成 Wordpress 的 content = content.replace(' ', ' ') # 接著若內容有 ~~~python 與 ~~~ 則換成 Wordpress 格式 content = content.replace('~~~python', '[code lang=\"python\"]') content = content.replace('~~~', '[/code]') return title, category, tags, content os.environ['TZ'] = 'Asia/Taipei' ################################# filepath = \"/home/amd/Desktop/your_wordpress_account_and_password.txt\" wordpress = \"your-wordpress-site-url\" fo = open(filepath, \"r+\") data = [] for line in fo.readlines(): data.append(line) fo.close() # 從網誌節點的 parent().h 取得 wp_url # 從網誌節點的 parent().b 取得帳號與密碼對應的文字檔案路徑 wp_url = \"https://\"+wordpress+\"/xmlrpc.php\" wp_username = data[0] wp_password = data[1] ################################# wp_blogid = \"0\" status_draft = 0 status_published = 1 server = xmlrpc.client.ServerProxy(wp_url) # 從目前所在節點的 body pan 中取出類別, tags 以及文章內容 title_str, category_str, tags_str, content = get_cat_tag_content(p.b) # title 是一個單獨的字串 title = title_str.split(\":\")[1] # 指定時間出版 ''' date_created = xmlrpc.client.DateTime(datetime.datetime.strptime(\"2013-01-01 00:00\", \"%Y-%m-%d %H:%M\")) ''' # 以現在時間出版, 考慮與 Server 時間差八個小時 (480 分鐘), 因此要在 8 個小時前發表 date_created = xmlrpc.client.DateTime(datetime.datetime.strptime((datetime.datetime.now()- \\ datetime.timedelta(minutes=480)).strftime('%Y-%m-%d %H:%M'),\"%Y-%m-%d %H:%M\")) categories = [category_str.split(\":\")[1]] # 請注意, 因為 tags 用逗點隔開, 因此必須透過 split() 再分開成為 list 資料 # 先用 : 斷開標投頭的 Tags:, 然後再透過逗點隔開, 將標註轉為數列資料 tags = tags_str.split(\":\")[1].split(\",\") data = {'title': title, 'description': content, 'dateCreated': date_created, 'categories': categories, 'mt_keywords': tags} post_id = server.metaWeblog.newPost(wp_blogid, wp_username, wp_password, data, status_published) # 利用最後的 child 節點來儲存 post_id to_save_post_id = p.insertAsLastChild() # 改為內文為空的節點, id 直接標在 head 標題 to_save_post_id.b = \"\" to_save_post_id.h = post_id # 因為新增節點, commander 必須 redraw c.redraw() g.es(\"post_id 為\", post_id) g.es(\"已經送出資料!\") ''' 其他 metaWeblog 的用法: metaWeblog.newPost (blogid, username, password, struct, publish) returns string(postid) metaWeblog.editPost (postid, username, password, struct, publish) returns true metaWeblog.getPost (postid, username, password) returns struct(blog content) ''' #edit-to-wordpress #coding: utf-8 import xmlrpc.client import datetime import os def get_cat_tag_content(data): # 請注意, 因為 data 來自 .md 的 body pan 內容, 第1行為 @language python # 用跳行符號分割 data_list = data.split(\"\\n\") #第2行為 title title= data_list[1] #第3行為 category category = data_list[2] #第4行為 tags tags = data_list[3] # 有多項資料的 content 型別為數列 # 再將第7行之後的資料數列串回成以跳行隔開的資料 content = \"\\n\".join(data_list[6:]) # 先將截斷摘要與內文的 pelican md 檔按符號, 換成 Wordpress 的 content = content.replace(' ', ' ') # 接著若內容有 ~~~python 與 ~~~ 則換成 Wordpress 格式 content = content.replace('~~~python', '[code lang=\"python\"]') content = content.replace('~~~', '[/code]') return title, category, tags, content os.environ['TZ'] = 'Asia/Taipei' ################################# filepath = \"/home/amd/Desktop/your_wordpress_account_and_password.txt\" wordpress = \"your-wordpress-site-url\" fo = open(filepath, \"r+\") data = [] for line in fo.readlines(): data.append(line) fo.close() wp_url = \"https://\"+wordpress+\"/xmlrpc.php\" wp_username = data[0] wp_password = data[1] ################################# wp_blogid = \"0\" status_draft = 0 status_published = 1 server = xmlrpc.client.ServerProxy(wp_url) # 從目前所在節點的 body pan 中取出類別, tags 以及文章內容 title_str, category_str, tags_str, content = get_cat_tag_content(p.b) # title 是一個單獨的字串 title = title_str.split(\":\")[1] # 指定時間出版 ''' date_created = xmlrpc.client.DateTime(datetime.datetime.strptime(\"2013-01-01 00:00\", \"%Y-%m-%d %H:%M\")) ''' # 以現在時間出版, 考慮與 Server 時間差八個小時 (480 分鐘), 因此要在 8 個小時前發表 date_created = xmlrpc.client.DateTime(datetime.datetime.strptime((datetime.datetime.now()- \\ datetime.timedelta(minutes=480)).strftime('%Y-%m-%d %H:%M'),\"%Y-%m-%d %H:%M\")) categories = [category_str.split(\":\")[1]] # 請注意, 因為 tags 用逗點隔開, 因此必須透過 split() 再分開成為 list 資料 tags = tags_str.split(\":\")[1].split(\",\") data = {'title': title, 'description': content, 'dateCreated': date_created, 'categories': categories, 'mt_keywords': tags} # 設法取得原 post 的 id origin_post = p.getLastChild() # 直接從標題取得 post 的 id 號碼 post_id = origin_post.h status = server.metaWeblog.editPost(post_id, wp_username, wp_password, data, status_published) if status: g.es(\"資料已經更新!\") else: g.es(\"有問題, 資料沒有更新!\") ''' 其他 metaWeblog 的用法: metaWeblog.newPost (blogid, username, password, struct, publish) returns string(postid) metaWeblog.editPost (postid, username, password, struct, publish) returns true metaWeblog.getPost (postid, username, password) returns struct(blog content) ''' #get-from-wordpress #coding: utf-8 import xmlrpc.client # 導入 html 模組, 使用 html.unescape 轉換 html 特殊符號 import html ################################# filepath = \"/home/amd/Desktop/your_wordpress_account_and_password.txt\" wordpress = \"your-wordpress-site-url\" fo = open(filepath, \"r+\") data = [] for line in fo.readlines(): data.append(line) fo.close() # 從網誌節點的 parent().h 取得 wp_url # 從網誌節點的 parent().b 取得帳號與密碼對應的文字檔案路徑 wp_url = \"https://\"+wordpress+\"/xmlrpc.php\" wp_username = data[0] wp_password = data[1] ################################# server = xmlrpc.client.ServerProxy(wp_url) # 設法透過上述網誌網址, 帳號與密碼, 以及文章 id, 取回 categories, tags, 文章標題, 文章內容等資 # 從最後的 child 節點來取 post_id origin_post = p.getLastChild() post_id = origin_post.h # 取回與 post_id 對應的網誌文章內容 blog_content = server.metaWeblog.getPost(post_id, wp_username, wp_password) title = blog_content[\"title\"] # 這裡要利用 html.unescape 轉回特殊符號 description = html.unescape(blog_content[\"description\"]) mt_text_more = html.unescape(blog_content[\"mt_text_more\"]) if mt_text_more != \"\": post_content = description + \"\\n \\n\"+mt_text_more else: post_content = description # 所取回的 categories 為 list categories = blog_content[\"categories\"] # 所取回的 tags 為以逗點隔開的字串 mt_keywords = blog_content[\"mt_keywords\"] # 取回文章作者 author = blog_content[\"wp_author_display_name\"] p.h = title categories_str = \"\" for category in categories: # 假如不是最後一個 if category != categories[len(categories)-1]: categories_str += category + \", \" else: # 這是最後一個 categories_str += category line1 = \"@language md\\n\" line2 = \"Title: \" +title + \"\\n\" line3 = \"Category: \" + categories_str + \"\\n\" line4 = \"Tags: \" + mt_keywords + \"\\n\" line5 = \"Author: \" + author + \"\\n@others\\n\" post_content = post_content.replace(' ', '\\n \\n') post_content = post_content.replace('[code lang=\"python\"]', '~~~python') post_content = post_content.replace('[/code]', '~~~') p.b = line1 + line2 + line3 + line4 + line5 + post_content + \"\\n\" # 因為節點資料更新, commander 必須 redraw c.redraw() g.es(\"資料已經取回\")","tags":"規劃","url":"http://cadlab.mde.tw/post/cadlab-xue-yuan-wang-zhi-xi-tong.html"},{"title":"該如何編寫一份電腦輔助機械設計使用手冊","text":"我們正在極力推廣使用的電腦輔助機械設計(Mechanical Computer Aided Design)相關套件, 包括 OnShape, Solvespace, FreeCAD, Elmer, V-rep 以及 Jupyter, 該如何用最\"好\"的方式來編寫使用手冊? 假如您已經在使用 OnShape, 一定已經看過 https://cad.onshape.com/help/ . 對應的 Solvespce 導引 http://solvespace.com/tutorial.pl 也是很不錯, 其他的幾個套件, 也都已經有了不錯的英文導引資料, 只是從教導學員協力完成某件電腦輔助設計流程工作的同時, 我們想要試試在 Github 的版次管理模式下, 我們能夠怎樣協同編寫一份電腦輔助設計相關的網頁式手冊. 啟動: 在 Github cad-lab 帳號下新增一個倉儲, 命名為 manual, 然後 git clone 到本地端, 準備置入能夠協同編輯的 Leo Editor 與 Pelican 架構. git clone https://github.com/cad-lab/manual.git cadlabmanual 之後, 進入 cadlabmanual 目錄, 利用 git branch gh-pages 建立 Github Pages 對應分支, 然後以 git checkout gh-pages 指令將本地端倉儲的工作目錄定位在 gh-pages 分支. 接下來就是放入 Pelican 靜態網頁系統, 就可以開始建立電腦輔助機械設計使用手冊了: http://cad-lab.github.io/manual/","tags":"規劃","url":"http://cadlab.mde.tw/post/gai-ru-he-bian-xie-yi-fen-dian-nao-fu-zhu-ji-jie-she-ji-shi-yong-shou-ce.html"},{"title":"Gigabit 乙太網路線","text":"目前在 CADLab 中使用的網路線為傳輸速率每秒十億 bit (10**9 bit/sec) 的 Category 6 Gigabit Ethernet. 採 1000BASE‑T 無遮蔽雙絞線, 以 EIA/TIA 568B 連接 RJ45 接頭. 其接線方式為接頭向前, 耳朵朝下, 混白線在前, 緊接著色線, 以橘藍綠棕排列後, 再將藍白與綠白對調, 就是 568B 的接法. 至於 568B 的網路跳線則再將一邊的橘白與橘線, 跟綠白與綠線對調. 因為橘白線的 pin 1 為 Transmit Data+, 橘線 pin2 則是 Transmit Data-, 綠白線 pin3 則為 Receive Data+, 綠線 pin 6 為 Receive Data-. 藍線 pin 4 與棕白 pin 7 同為 Bi-directional+, 而藍白線 pin5 與棕線 pin 8 則同為 Bi-directional-. 為了達到規格中的 Gigabit 傳輸速度, 8 條線都要確實連接, 假如只有 pin 1, 2, 3, 6 接線, 則傳輸速度將會降為 100 Mega bit/sec. 另外, 1000BASE‑T 的無遮蔽雙絞銅線, 建議每段最長為 100 m. EIA/TIA 568B 的標準雙絞線 (兩端採相同色線排列) 腳位: 接頭朝前, 耳朵朝下 (橘藍綠棕, 白線在前, 排好後, 藍白與綠白對調) 顏色: 橘白-橘-綠白-藍-藍白-綠-棕白-棕 Cross Over (EIA/TIA 568B) 線 (一端採標準 EIA/TIA 568B 色線排列, 另一端則將綠線與橘線對調) 腳位: 接頭朝前, 耳朵朝下 顏色: 綠白-綠-橘白-藍-藍白-橘-棕白-棕 (即將上面正常線的橘線與綠線對調) 最後, 假如要利用 Raspberry Pi 3 打造成為 Wifi 的 Access Point, 可以參考 http://blog.itist.tw/2016/03/using-raspberry-pi-3-as-wifi-ap-with-raspbian-jessie.html 與 http://raspberry-at-home.com/hotspot-wifi-access-point/ 與 https://frillip.com/using-your-raspberry-pi-3-as-a-wifi-access-point-with-hostapd/","tags":"規劃","url":"http://cadlab.mde.tw/post/gigabit-yi-tai-wang-lu-xian.html"},{"title":"電腦輔助設計室網路連線管理","text":"電腦輔助設計室長期以來都是在 IPV4 的架構下, 透過 NAT, 以共用一個網路位址上網, 若以整間教室 63 台電腦為例, 只需要設法利用 9 個固定的 IPV4 網路位址, 讓其中的 9 台電腦同時支援 IPV4 與 IPV6 協定, 並且透過 Squid 代理伺服器的設定, 就可以利用網路負載平衡, 大幅提升用戶的連網速度. 自 2012 年起校園主幹就已經全面支援 IPV6 的網路協定, 但是由於台灣大部份的網站仍然只提供 IPV4 網址與協定連線, 因此即使在 IPV6 網址無虞的情況下, 讓每一台電腦輔助設計室的電腦都透過 IPV6 協定取得網址, 仍然需要 IPV4/IPV6 雙支援的代理主機, 才能連結使用所有的網站. 因此目前的規劃是, 讓 63 台電腦全部透過 IPV6 協定取得 IP 位址上網, 但是其中的 9 台電腦則以其中規劃好的第3磁區 Ubuntu Server 開機 (其他兩個開機磁區分別為 Windows 7 與 Windows 10), 而且這 9 台電腦是在預先綁定 MAC 位址到雙支援 IPV4/IPV6 的固定 IP 情況下, 自行透過 DNS 設定, 以 Round Robin 的簡單負載平衡, 來服務其他僅設定 IPV6 DHCP Client 連線的電腦. 其次, 學員自行攜入 CADLab 使用的 Raspberry Pi 3 隨身卡片電腦, 也可以利用 IEEE 802.11n 的協定取得 IPV6 位址, 然後也是透過雙支援的代理伺服器連線上網. 而使用 git 相關指令之前, 必須確定已經設定 git config --global http.proxy http://myproxy.server:port git config --global https.proxy https://myproxy.server:port","tags":"規劃","url":"http://cadlab.mde.tw/post/dian-nao-fu-zhu-she-ji-shi-wang-lu-lian-xian-guan-li.html"},{"title":"導入 Ubuntu 操作系統","text":"身為一位機械設計工程系的學生, 有機會在 Ubuntu 操作系統上工作嗎? 自從 1995 年, 第1套能在 Windows 操作系統執行的電腦輔助機械設計繪圖軟體套件, SolidWorks, 出現, 並且逐步蔚為風潮之後, MCAD (Mechanical Computer Aided Design) 中端套件, 幾乎都只能在 Windows 操作系統上運作. 許多機械設計工程系相關師生, 幾乎早已經忘記, 最早的 MCAD 系統可都是在泛 Unix based 的操作系統上運作. 時間轉到 2015 年, Onshape: http://www.onshape.com 的出現, 雖然截至目前只提供陽春的 MCAD 功能, 但是至少讓原本必須在 Windows 操作系統上才能上課的約束條件, 頓時消失, 因為計算機程式、網際內容管理、電腦輔助設計實習與協同產品設計實習等課程, 已經能夠百分之百在 Ubuntu 操作系統上運作. 過去, 我們在 Windows 操作系統上的工作類別, 不外乎: 文書處理 程式編寫與執行 MCAD 零件繪圖, 零件組立 MCAE 工程分析 擷取執行畫面 錄製操作流程影片 遠端登入到其他電腦 (Remote Desktop) 以下將就這些工作分類, 介紹在 Ubuntu 操作系統中的相對應工具與使用方法. 首先, 這裡建議的 Ubuntu 操作系統為 Ubuntu Server 版本加上 ubuntu-desktop 套件的安裝. 一旦安裝完成, 第1項文書處理工作就可以由 LibreOffice 套件加以勝任. 程式編寫與執行 這裡包含 Python3, PyQt5, Leo Editor, SciTE, Git 等套件都是跨操作系統, 其中 Python3 已經內建在 Ubuntu 14.04 操作系統中, 只是必須透過 python3 執行, 例如: 必須在命令列中, 輸入 python3 帶出互動式解譯環境. pip3 模組則需要透過 sudo apt-get install python3-pip 安裝 PyQt5 則需要透過 sudo apt-get install python3-pyqt5 安裝 Leo Editor 透過 sudo pip3 install https://github.com/leo-editor/leo-editor/archive/master.zip 安裝, 並且以 leo& 呼叫 SciTE 透過 sudo apt-get install scite 安裝 git 透過 sudo apt-get install git 安裝 MCAD 零件與組件繪圖 這裡採用 http://www.onshape.com , 只需要 Firefox 或 Chromium 瀏覽器就可以運作 FreeCAD: http://www.freecadweb.org/ 與 Solvespace: http://solvespace.com/ , 則是能在 Ubuntu 環境運作的 MCAD 套件. MCAE 工程分析 這裡採用 http://www.simscale.com , 只需要 Firefox 或 Chromium 瀏覽器就可以運作 COMSOL 可以 在 Ubuntu 環境中運作 Ansys 則 建議 在 Red Hat 或 SUSE 商用版上運作 錄製操作流程影片 在 Ubuntu 操作系統中擷取電腦螢幕畫面, 只要按下 PrintScr 按鍵, 就可以直接存為 png 格式檔案 操作流程則可以使用 Kazam 將過程錄成 mp4檔案 Kazam: https://code.launchpad.net/~kazam-team/kazam/stable (以 Python 編寫) 安裝: sudo add-apt-repository ppa:kazam-team/stable-series sudo apt-get update sudo apt-get install kazam 使用: kazam& 至於在 Ubuntu 遠端登入到 Windows, 可以使用 Ubuntu Software Center 安裝 remmina, 並且在連線設定上的 Advanced 頁面中, Security 選用 RDP 協定, 即可正確連線. Ubuntu 檔案架構 /bin ­­ binary applications (most of your executable files) /boot ­­ files required to boot (such as the kernel, etc) /dev ­­ your devices (everything from drives to displays) /etc ­­ just about every configuration file for your system /etc/rc.d ­­ contains a number of shell scripts that are run on bootup at different run levels. /etc/X11 ­­ configuration files for the X Window system /home ­­ locally stored user files and folders /lib ­­ system libraries (similar to Program Files) /media ­­ mounted (or loaded) devices such as cdroms, digital cameras, etc. /mnt ­­ mounted file systems /opt ­­ location for \"optionally\" installed programs /sbin ­­ system ­only binaries /sys ­­ contains information about the system /tmp ­­ temporary files /usr ­­ applications mainly for regular users /var ­­ mainly logs, databases, etc. Ubuntu 常用指令 ls : list directory contents cd : Change Directory pwd : print the current/working directory mkdir : make/create directory rmdir : remove the empty directory rm : remove/delete file mv : rename or move a file/directory man : Manual pages for shell commands cp : Copy Files passwd : Change password for user tar : Creates and extracts files from a tape or disk archive find : find searches the file located at / grep : print lines matching a pattern chown : change file owner and group chgrp : change group ownership chmod : change file mode bits ifconfig : configure a network interface 參考資料: https://help.ubuntu.com/lts/serverguide/serverguide.pdf http://ecourts.nic.in/2/mannual/admin_manual.pdf http://wiki.lib.sun.ac.za/images/7/7b/Ubuntu-desktop.pdf http://askubuntu.com/questions/154121/why-wont-remmina-connect-to-windows-7-remote-desktop","tags":"導引","url":"http://cadlab.mde.tw/post/dao-ru-ubuntu-cao-zuo-xi-tong.html"},{"title":"電腦輔助設計室網誌開通","text":"機械設計工程系電腦輔助設計室 2016 Fall 電腦系統規劃, 引導勝壓迫、鼓勵勝漠視、開放才有未來 CADLab 是綜一館一間配置 63+1 台個人電腦的教學實驗室 網誌文章分類 這個網站的文章分類暫定為: 規劃 (Planning) - 想做, 但是尚未完成之前的相關配置與架構設計紀錄 導引 (Tutorial) - 已經完成的流程紀錄與心得感想 資源 (Resources) - 配合上課需求所提供的各項內容服務 參考 (References) - 紀錄其他相關類似教學實驗室的管理方法與現況了解 其他 (Misc) - 未能納入上述其他分類的文章 構想 要讓一間二十一世紀國立科技大學的電腦教室發揮應有的功能, 著實需要一些規劃, 我們的構想其實很簡單: 讓每一台電腦硬體同時具有3個開機磁區 讓每一位使用者都知道如何善用各磁區的內容 讓每一位使用者都了解開關機標準流程, 並願意遵守奉行 讓每一台電腦都可以在網路切換下, 使用 IPV4 或 IPV6 協定下的區域與廣域網路主機 開機磁區 Windows 10 - 存放必須要安裝的各種應用程式與套件 Windows 10 - 存放無需安裝的可攜綠色套件 Ubuntu 14.04 - Server 版加裝 ubuntu-desktop CADLab 使用與維護 各班上課時, 每排推派一名輪值生, 負責事項: 敦促同學不要在電腦桌上用餐 上課前後, 負責到 CADLab 日誌, 登記或勾選學員電腦使用情形, 填寫維修單或建議表 負責在課後, 確實檢查各電腦是否正常關機, 是否遺留個人物品 負責在課後清潔各排座位地板與桌面, 與班上幹部配合全員離開 CADLab 前確實關閉所有照明與空調系統","tags":"規劃","url":"http://cadlab.mde.tw/post/dian-nao-fu-zhu-she-ji-shi-wang-zhi-kai-tong.html"},{"title":"CADLab CAD/E 軟體套件使用建議","text":"電腦輔助設計與工程分析是機械設計工程師進行 2D/3D 繪圖與理論分析表達的重要工具, 這裡是我們建議學員使用的 CAD/CAE 軟體套件. CAD: 商用封閉單機套件: SolidWorks 與 PTC Creo 雲端封閉套件(提供免費使用方案): Onshape: http://onshape.com 自由開源套件: Solvespace: http://solvespace.com/ FreeCAD: http://www.freecadweb.org/ CAE: 商用封閉套件: ansys 與 comsol 自由開源套件: Elmer: https://www.csc.fi/web/elmer Kratos: http://www.cimne.com/kratos 數值運算: 商用封閉套件: Matlab 與 Mathematica 自由開源套件: Jupyter: http://jupyter.org/","tags":"資源","url":"http://cadlab.mde.tw/post/cadlab-cade-ruan-ti-tao-jian-shi-yong-jian-yi.html"},{"title":"CADLab 網路配線繪圖","text":"利用程式方法執行網路配線繪圖 CADLab 中的網路配線圖, 就如同 http://blockdiag.com/en/ 專案所示, 可以利用語法描述參數與配置之後, 透過程式方法轉出結果. 以 nwdiag https://bitbucket.org/blockdiag/nwdiag 為例, 在只有 Python3 的 Windows 環境中安裝: pip install nwdiag 之後就可以利用 nwdiag 命令解讀 .diag network diagram 描述檔, 並且轉為 png 或 svg 格式. 假如是在同時裝有 Python2 與 Python3 的 Ubuntu 環境中安裝 nwdiag: pip3 install nwdiag 之後的應用與 Windows 環境相同. http://blockdiag.com/en/ 專案還有方塊圖 blockdiag, 序列圖 seqdiag 以及活動圖 actdiag 等相關繪圖的應用. 最後假如 CADLab 希望利用 Sphinx 來整理電腦輔助設計室的文件, 則可以套用 https://github.com/blockdiag 中的 extensions 工具.","tags":"參考","url":"http://cadlab.mde.tw/post/cadlab-wang-lu-pei-xian-hui-tu.html"},{"title":"Cadlab 的理想設置","text":"一個符合二十一世紀工學院實際需求的電腦輔助設計室, 應該如何規劃配置? Cadlab 是個熱門的名詞, 代表 Computer Aided Design Laboratory, 也就是電腦輔助設計實驗室, 或簡稱電腦輔助設計室. 過去的電腦輔助設計室, 充滿各種讓使用者進行電腦輔助設計的公用電腦, 加上部份伺服器提供相關設計運算或資料儲存之用, 而現在, 這樣的配置可能不再恰當, 尤其是一間配置著 60 幾台最新硬體的桌上型電腦, 但卻採用所謂的防寫卡進行硬碟保護的電腦, 倘若無法隨時配合著經常性的操作系統或應用軟體更新, 這樣的 Cadlab 配置, 更是錯上加錯. 其實, 二十一世紀的工學院, 所有課程都應該在數位網路環境中進行, 因此所有這些所謂未來的工程師, 就應該在入學的第1天就被配予一台 17 寸的筆記型電腦, 而且裝載著各種未來幾年甚至離開學校之後, 都還能夠合法使用的相關專業用軟硬體套件. 過去, 由於全球協同的步調較慢, 各種產品的生命週期時間較長, 因此允許學校與產業界的差異性容忍度較大, 但是, 近幾年在在各種資訊與通訊軟硬體的快速發展衝擊下, 不僅全球協同的步調加速, 各種產品的生命週期愈來愈短, 促使學校教育單位與產業界必須在某些層面上攜手同步, 否則終將無法培育出適才、適所與適任的未來工程師. 而且, 隨著可攜裝置與自造軟硬體的逐步普及, Cadlab 配置中的所謂電腦, 除了包括讓工程師可以隨身攜帶的筆記型電腦以外, 還必須包括各類微控制器與 3D 印表機, 讓 Cadlab 實驗室中的各種系統模擬, 可以透過初步的硬體原型測試基本的可行性.","tags":"參考","url":"http://cadlab.mde.tw/post/cadlab-de-li-xiang-she-zhi.html"},{"title":"KMOL 2016 Spring Portable Tool","text":"針對 cadlab 上計算機程式、網際內容管理、電腦輔助設計實習與協同產品設計實習等課程, 採用 Python 3.4 打造的 Windows 版可攜程式套件 可攜套件倉儲: https://github.com/chiamingyen/kmol2016 kmol2016 下載: https://my.pcloud.com/publink/show?code=XZH5J4ZOj9C9aomi5F1DtnuQNIHYLDO7EjX","tags":"資源","url":"http://cadlab.mde.tw/post/kmol-2016-spring-portable-tool.html"},{"title":"Bezier 曲線導引","text":"A primer on Bezier curves http://pomax.github.io/bezierinfo/ http://pomax.github.io/bezierjs/ 嘗試將純 Javascript 的環境轉為 Brython based https://github.com/brython-dev/brython , 希望完成之後, 可以讓使用者編寫 Python3 程式碼來操控 Bezier 曲線 https://en.wikipedia.org/wiki/B%C3%A9zier_curve .","tags":"導引","url":"http://cadlab.mde.tw/post/bezier-qu-xian-dao-yin.html"},{"title":"使用者貢獻文章標題(參考)","text":"使用者貢獻文章的參考 Leo Editor 檔案 使用者貢獻文章的內容","tags":"參考","url":"http://cadlab.mde.tw/post/shi-yong-zhe-gong-xian-wen-zhang-biao-ti-can-kao.html"},{"title":"使用者貢獻文章標題","text":"使用者貢獻文章的參考 Leo Editor 檔案 本網誌的系統與靜態資料為一個 Github 倉儲 https://github.com/cad-lab/blog , 只要符合 GNU AFFERO GENERAL PUBLIC LICENSE 授權規範, 任何人都可以取用. 本網誌的規劃是希望透過 Gmail 的認証取得參與協同著作的權限後, 各作者可以利用 users 目錄下的 .leo 檔案, 各自維護自己的文章, 基本要求是, 每篇文章, 必須以使用者帳號作為開頭, 並建議依照日期分類, 以避免各用戶的文章彼此覆蓋. 各用戶若需要協同著作, 共同維護一篇 content 目錄中的某一個 .md 檔案, 那麼各用戶在 gh-pages 倉儲分支版本提交與推送過程, 就必須設法處理版本內容的衝突, 但各 .md 檔案建議是在 Leo Editor @edit 或@clean 節點下進行協同編輯並處理內容衝突. 下圖為機械設計工程系即時網路連線:","tags":"參考","url":"http://cadlab.mde.tw/post/shi-yong-zhe-gong-xian-wen-zhang-biao-ti.html"}]};