var tipuesearch = {"pages":[{"tags":"misc","url":"http://cadlab.mde.tw/post/pages/about/","title":"About","text":"CAD 實驗室 CAD Lab 為台灣國立虎尾科技大學, 機械設計工程系, 電腦輔助設計實驗室, 全稱為 Computer Aided Design Laboratory (縮寫為 CADLab), Department of Mechanical Design Engineering, National Formosa University, Taiwan. CADLab 管理方法"},{"tags":"引導","url":"http://cadlab.mde.tw/post/dao-ru-ubuntu-cao-zuo-xi-tong.html","title":"導入 Ubuntu 操作系統","text":"身為一位機械機械設計工程系的學生, 有機會在 Ubuntu 操作系統上工作嗎? 自從 1995 年, 第1套能在 Windows 操作系統執行的電腦輔助機械設計繪圖軟體套件, SolidWorks, 出現, 並且逐步蔚為風潮之後, MCAD (Mechanical Computer Aided Design) 中端套件, 幾乎都只能在 Windows 操作系統上運作. 許多機械設計工程系相關師生, 幾乎早已經忘記, 最早的 MCAD 系統可都是在泛 Unix based 的操作系統上運作. 時間轉到 2015 年, Onshape: http://www.onshape.com 的出現, 雖然截至目前只提供陽春的 MCAD 功能, 但是至少讓原本必須在 Windows 操作系統上才能上課的約束條件, 頓時消失, 因為計算機程式、網際內容管理、電腦輔助設計實習與協同產品設計實習等課程, 已經能夠百分之百在 Ubuntu 操作系統上運作. 過去, 我們在 Windows 操作系統上的工作類別, 不外乎: 文書處理 程式編寫與執行 MCAD 零件繪圖, 零件組立 MCAE 工程分析 取執行畫面 錄製操作流程影片 遠端登入到其他電腦 (Remote Desktop) 以下將就這些工作分類, 介紹在 Ubuntu 操作系統中的相對應工具與使用方法. 首先, 這裡建議的 Ubuntu 操作系統為 Ubuntu Server 版本加上 ubuntu-desktop 套件的安裝. 一旦安裝完成, 第1項文書處理工作就可以由 LibreOffice 套件加以勝任. 程式編寫與執行 這裡包含 Python3, PyQt5, Leo Editor, SciTE, Git 等套件都是跨操作系統, 其中 Python3 已經內建在 Ubuntu 14.04 倉做系統中, 只是必須透過 python3 執行, pip3 模組則需要透過 sudo apt-get install python3-pip 安裝 PyQt5 則需要透過 sudo apt-get install python3-pyqt5 安裝 Leo Editor 透過 sudo pip3 install https://github.com/leo-editor/leo-editor/archive/master.zip 安裝, 並且以 leo& 呼叫 SciTE 透過 sudo apt-get install scite 安裝 git 透過 sudo apt-get install git 安裝 MCAD 零件與組件繪圖 這裡採用 http://www.onshape.com , 只需要 Firefox 或 Crhomium 瀏覽器就可以運作 MCAE 工程分析 這裡採用 http://www.simscale.com , 只需要 Firefox 或 Crhomium 瀏覽器就可以運作 錄製操作流程影片 Kazam: https://code.launchpad.net/~kazam-team/kazam/stable (以 Python 編寫) 安裝: 1 2 3 sudo add-apt-repository ppa:kazam-team/stable-series sudo apt-get update sudo apt-get install kazam 使用: kazam& 至於在 Ubuntu 遠端登入到 Windows, 可以使用 Ubuntu Software Center 安裝 remmina, 並且在連線設定上的 Advanced 頁面中, Security 選用 RDP 協定, 即可正確連線. 參考資料: http://askubuntu.com/questions/154121/why-wont-remmina-connect-to-windows-7-remote-desktop"},{"tags":"規劃","url":"http://cadlab.mde.tw/post/dian-nao-fu-zhu-she-ji-shi-wang-zhi-kai-tong.html","title":"電腦輔助設計室網誌開通","text":"機械設計工程系電腦輔助設計室 2016 Fall 電腦系統規劃 CADLab 是綜一館一間配置 63 台個人電腦的教學實驗室 網誌文章分類 構想 要讓一間二十一世紀國立科技大學的電腦教室發揮應有的功能, 著實需要一些規劃, 我們的構想其實很簡單: 讓電腦硬體同時具有3個開機磁區 每一位使用者都知道如何善用各磁區的內容 使用每一位使用者都了解開關機標準流程, 並確實遵守奉行 每一台電腦都可以在網路切換下, 使用 IPV4 或 IPV6 協定下的區域與廣域網路主機 開機磁區 Windows 10 - 存放必須要安裝的各種應用程式與套件 Windows 10 - 存放無需安裝的可攜綠色套件 Ubuntu 14.04 - Server 版加裝 ubuntu-desktop 實際情況 另外利用主機建立維修回報系統與使用者操作日誌系統 完成事項"},{"tags":"範例","url":"http://cadlab.mde.tw/post/shi-yong-zhe-gong-xian-wen-zhang-biao-ti.html","title":"使用者貢獻文章標題","text":"使用者貢獻文章摘要 機械設計工程系即時網路連線:"}]};