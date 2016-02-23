<?xml version="1.0" encoding="utf-8"?>
<!-- Created by Leo: http://leoeditor.com/leo_toc.html -->
<?xml-stylesheet ekr_test ?>
<leo_file xmlns:leo="http://leoeditor.com/namespaces/leo-python-editor/1.1" >
<leo_header file_format="2" tnodes="0" max_tnode_index="0" clone_windows="0"/>
<globals body_outline_ratio="0.5" body_secondary_ratio="0.5">
	<global_window_position top="50" left="50" height="500" width="700"/>
	<global_log_window_position top="0" left="0" height="0" width="0"/>
</globals>
<preferences/>
<find_panel_settings/>
<vnodes>
<v t="leo.20151212173315.1"><vh>@settings</vh>
<v t="leo.20151212173315.2"><vh>@data qt-gui-plugin-style-sheet</vh></v>
<v t="leo.20151212173315.3"><vh>@string initial_split_orientation = horizontal</vh></v>
</v>
<v t="amd.20160106095324.1" a="E"><vh>@path ./../</vh>
<v t="leo.20151213173811.1" a="E"><vh>假如要送到 gh-pages 分支, 使用下列按鈕</vh>
<v t="leo.20151212173658.1"><vh>@button gh-pages pelican</vh></v>
</v>
<v t="leo.20151213173830.1" a="E"><vh>假如要在近端檢視, 使用下列按鈕</vh>
<v t="leo.20151213085727.1"><vh>@button local pelican</vh></v>
</v>
<v t="ibm.20160115125316.1"><vh>管理者在產生遠端資料前, 定期清理 post 目錄</vh></v>
<v t="ibm.20160115125101.1"><vh>@button git rm -fr post</vh></v>
<v t="amd.20151215180106.1" a="E"><vh>設定與開發</vh>
<v t="amd.20151216151325.1"><vh>@edit index.html</vh></v>
<v t="amd.20151216152209.1"><vh>@edit README.md</vh></v>
<v t="amd.20160118111604.1"><vh>@edit LICENSE</vh></v>
<v t="amd.20160118111653.1"><vh>@edit .gitignore</vh></v>
<v t="leo.20151213230723.1"><vh>Pelican 設定</vh>
<v t="leo.20151213230957.1"><vh>文章 Date 設定</vh></v>
<v t="leo.20151213230729.1"><vh>使用 summary plugin</vh></v>
</v>
<v t="amd.20151215170117.1"><vh>以下 pellicanconf.py 為近端與遠端的共同設定</vh></v>
<v t="leo.20151212173725.1"><vh>@edit pelicanconf.py</vh></v>
<v t="amd.20151215170142.1"><vh>以下 publishconf.py 為遠端所使用的設定</vh></v>
<v t="leo.20151212173803.1"><vh>@edit publishconf.py</vh></v>
<v t="amd.20151215170221.1"><vh>以下 local_publishconf.py 為近端所使用的設定</vh></v>
<v t="leo.20151213085752.1"><vh>@edit local_publishconf.py</vh></v>
<v t="amd.20160120180714.1"><vh>@path theme</vh>
<v t="amd.20160120180720.1" a="E"><vh>@path pelican-bootstrap3</vh>
<v t="amd.20160120180746.1" a="E"><vh>@path templates</vh>
<v t="amd.20160120180758.1"><vh>@edit base.html</vh></v>
</v>
</v>
</v>
</v>
</v>
<v t="amd.20151215170350.1"><vh>以下為 content 目錄中的 md 檔案</vh></v>
<v t="amd.20160106093610.1"><vh>協同網誌編寫規範</vh></v>
<v t="amd.20151216001126.1"><vh>md 檔案範例</vh></v>
<v t="amd.20151215170031.1" a="E"><vh>@path ./../content</vh>
<v t="amd.20160106093454.1" a="E"><vh>yen 網誌文章</vh>
<v t="amd.20160106093510.1"><vh>201601</vh>
<v t="ibm.20160115121941.1"><vh>@edit yen_20160115.md</vh></v>
<v t="amd.20160117143423.1"><vh>@edit yen_20160117.md</vh></v>
<v t="amd.20160120213235.1"><vh>@edit yen_20160120.md</vh></v>
</v>
<v t="amd.20160215161310.1" a="E"><vh>201602</vh>
<v t="amd.20160215161329.1"><vh>@edit yen_20160215.md</vh></v>
<v t="amd.20160223120511.1"><vh>@edit yen_20160223.md</vh></v>
</v>
</v>
</v>
<v t="amd.20160106094754.1" a="E"><vh>@path ./../content/pages</vh>
<v t="amd.20160106094829.1" a="E"><vh>yen pages 文章</vh>
<v t="amd.20160106094844.1"><vh>@edit yen_pages_1.md</vh></v>
</v>
</v>
</vnodes>
<tnodes>
<t tx="amd.20151215170031.1"></t>
<t tx="amd.20151215170117.1"></t>
<t tx="amd.20151215170142.1"></t>
<t tx="amd.20151215170221.1"></t>
<t tx="amd.20151215170350.1"></t>
<t tx="amd.20151215180106.1"></t>
<t tx="amd.20151216001126.1">@language md
Title: 文章標題
Category: 類別
Tags: 標籤
Author: kmol

這裡放入文章摘要

&lt;!-- PELICAN_END_SUMMARY --&gt;

這裡為文章主要內容</t>
<t tx="amd.20160106093454.1"></t>
<t tx="amd.20160106093510.1"></t>
<t tx="amd.20160106093610.1">協同成員的 .leo 檔案

    每一位協同者, 各自可以在 users 目錄下擁有一個 .leo 檔案, 用來維護各自位於 content 目錄下的 .md 檔案,
    
    例如: user yen 的 .leo 檔案位於 users/yen.leo

協同成員的 .md 檔案命名

    由於各成員所編寫的 .md 檔案都位於 content 目錄下, 因此必須在各負責的 .md 檔案名稱冠上用戶名稱,
    
    例如: 由 yen 負責編寫的 .md 檔案, 特別命名為 yen_20160106.md, 若一天有兩篇以上文章, 則取 yen_20160106-1.md
    
    當使用者要利用 pelican 在近端轉換網誌時, 必須使用 local-pelican 按鈕, 若要送到 github pages 網站, 則必須透過 gh-pages-pelican 按鈕轉檔.

pages 文章

    寫在 content/pages 目錄中的 .md 檔案, 將會被轉為網誌 pages 內容

</t>
<t tx="amd.20160106094754.1"></t>
<t tx="amd.20160106094829.1"></t>
<t tx="amd.20160106095324.1"></t>
<t tx="amd.20160120180714.1"></t>
<t tx="amd.20160120180720.1"></t>
<t tx="amd.20160120180746.1"></t>
<t tx="amd.20160215161310.1"></t>
<t tx="ibm.20160115125101.1">@language python
import os
# 從 .git 清除既有 post 目錄下的所有資料, 因為若更動相關文章 .md 設定, 將會在資料庫中殘留不必要的檔案資料
os.system("git rm -rf post")
g.es("git rm -rf post 執行完畢")</t>
<t tx="ibm.20160115125316.1"></t>
<t tx="leo.20151212173315.1"></t>
<t tx="leo.20151212173315.2">QTreeWidget {
    /* These apply to the selected item, but not to editing items.*/
    background-color: #ffffec; /* Leo's traditional tree color */
    selection-color: black; /* was white */
    selection-background-color: lightgrey;
    /* font-family: SansSerif; */
    /*font-family: DejaVu Sans Mono;*/
    font-family:YaHei Mono;
    /* 標題字型大小設定 */
    font-size: 20px;
    font-weight: normal; /* normal,bold,100,..,900 */
    font-style: normal; /* normal, italic,oblique */
 }

/* Headline edit widgets */
QTreeWidget QLineEdit {
    background-color: cornsilk;
    selection-color: white;
    selection-background-color: blue;
    /*font-family: DejaVu Sans Mono;*/    
    font-family:YaHei Mono;
    /* 沒有特別對應字型大小 */
    font-size: 20px;
    font-weight: normal; /* normal,bold,100,..,900 */
    font-style: normal; /* normal, italic,oblique */
}

/* The log panes */
QTextEdit {
    background-color: #f2fdff;
    selection-color: red;
    selection-background-color: blue;
    /* font-family: Courier New; */
    font-family:YaHei Mono;
    /* log font 大小 */
    font-size: 20px;
    font-weight: normal; /* normal,bold,100,..,900 */
    font-style: normal; /* normal, italic,oblique */
}

/* The body pane */
QTextEdit#richTextEdit {
    background-color: #fdf5f5; /* A kind of pink. */
    selection-color: white;
    selection-background-color: red;
    /*font-family: DejaVu Sans Mono;*/
    /* font-family: Courier New; */
    font-family:YaHei Mono;
    /* 內文字型大小 */
    font-size: 20px;
    font-weight: normal; /* normal,bold,100,..,900 */
    font-style: normal; /* normal,italic,oblique */
}

QLabel {
    font-family:YaHei Mono;'CherryPy', 'pytz', 'mako', 'beautifulsoup4', 'pymysql', 'peewee'
    /* 下方的 Minibuffer 標題字型大小 */
    font-size: 20px;
    font-weight: normal; /* normal,bold,100,..,900 */
    font-style: normal; /* normal,italic,oblique */
}

/* Editor labels */
QLineEdit#editorLabel {
    background-color: #ffffec;
    font-family:YaHei Mono;
    /* 沒有直接對應字型大小 */
    font-size: 20px;
    font-weight: normal; /* normal,bold,100,..,900 */
    font-style: normal; /* normal,italic,oblique */
    border: 2px;
    margin: 2px;
}</t>
<t tx="leo.20151212173315.3">horizontal: body pane to the left
vertical: body pane on the botton</t>
<t tx="leo.20151212173658.1">@language python
import os
os.system("pelican content -o post -s publishconf.py")
g.es("admin pelican 執行完畢")

</t>
<t tx="leo.20151213085727.1">@language python
import os
#os.system("pelican content -o output -s local_publishconf.py -t theme/pelican-bootstrap3")
os.system("pelican content -o post -s local_publishconf.py")
g.es("admin pelican 近端執行完畢")


</t>
<t tx="leo.20151213173811.1"></t>
<t tx="leo.20151213173830.1"></t>
<t tx="leo.20151213230723.1"></t>
<t tx="leo.20151213230729.1">利用

&lt;!-- PELICAN_END_SUMMARY --&gt;

來界定 Summary 摘要內容

前提, 必須設定 

PLUGIN_PATHS = ['plugin']

與

PLUGINS = ['liquid_tags.notebook', 'summary']

並且從 https://github.com/getpelican/pelican-plugins

取得 summary plugin</t>
<t tx="leo.20151213230957.1"># 設定網誌以 md 檔案建立的 file system date 為準, 無需自行設定

DEFAULT_DATE = 'fs'</t>
</tnodes>
</leo_file>
