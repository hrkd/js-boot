#エクセルで作ったcsvの文字コードと改行を変換
nkf -Luw ./config/page_list.csv > ./config/page_list.tmp.csv

#csvをjsonに変換
#csvにはヘッダー行を付けておけばそれが自動的にkeyになる。
csvtojson ./config/page_list.tmp.csv > ./config/data.json
rm ./config/page_list.tmp.csv
