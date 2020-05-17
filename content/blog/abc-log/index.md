---
title: ABC (AtCoder Beginner Contest) 殴り書きメモ
date: 2020-05-17
---

そろそろ書いておかないとこれ毎回調べてますよね？えぇ？みたいなのが結構あるので、いい加減覚えたほうがいいんじゃないですかみたいな初歩的知識から、知らなかった解法やら書き方まで、書き殴っておくメモページを作っておくことにした。  

## お決まりのやつ
```cpp
#include <bits/stdc++.h>
using namespace std;
```

## 配列・文字列系
- 長さの取得は`s.size()`（JSはlengthだけども）
- 配列の書き方は`vector<int> hoge(3)` ()の中の数字で指定した要素数で初期化
- 確保した要素数以上に、配列に要素を追加したい場合は`hoge.push_back(1)`みたいにpush_backを使って引数として追加したい要素を渡す

## 型とか
- なんかでかい数字を扱うなら`long long`使っておけばよさそう
- 正の数しか出てこないなら`unsigned long long`でおk
- 小数で一番大きい型は`long double`、でも`double`でも10^308まで扱えるので十分だと思う
	- [【C言語/C++】データ型のサイズ・範囲の一覧【32bit/64bit環境】 | MaryCore](https://marycore.jp/prog/c-lang/data-type-ranges-and-bit-byte-sizes/)
- 小数の桁数表示を操るには`cout << fixed << setprecision(20) << endl`で。表示されてないだけで、中では保存されているらしい
	- [c++ 浮動小数点数 表示方法 - Qiita](https://qiita.com/ryu136/items/1cbeb860d4a2f056358a)

## pi
`math.h`に定義されている `M_PI`  

## 基本的な関数と思われるやつ（よく知らね）
- 平方根: `sqrt(引数)`
- 絶対値: `abs(引数)`

## 直角三角形以外で辺の長さを求める #ABC168
余弦定理というらしい。必要な材料は ①2辺の長さ ②その間の角 の2つ。  
[めちゃ分かりやすい余弦定理の説明](https://www.geisya.or.jp/~mwm48961/kou2/cos_rule.htm)
```
a^2 = b^2 + c^2 - 2bc * cosA
```
C++でcosを求める際は、角度ではなくラジアンが必要。ラジアンの求め方は、  
```
rad = deg * π / 180
```