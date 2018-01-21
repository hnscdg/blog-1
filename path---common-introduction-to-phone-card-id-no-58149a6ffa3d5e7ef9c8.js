webpackJsonp([0x7066efc14431],{479:function(n,t){n.exports={data:{site:{siteMetadata:{title:"whinc's Blog",author:"whincwu"}},markdownRemark:{id:"/Users/whincwu/Projects/blog/src/pages/common/introduction-to-phone-card-id-no/index.md absPath of file >>> MarkdownRemark",html:'<blockquote>\n<p>本文总结了常见的银行卡号、身份证号和手机号的组成及校验方法，并提供了完整的示例代码。</p>\n</blockquote>\n<h2>1. 银行卡号（Bank Card Number）</h2>\n<p>平时生活中钱包里面充满了各种各样的卡，如信用卡、借记卡、礼品卡、会员卡和VIP卡等等，这些卡号并非随意定制的，都遵循国际标准 <a href="https://en.wikipedia.org/wiki/ISO/IEC_7812">ISO/IEC 7812</a>，开发过程中接触到较多的是银行卡号，下面主要说下银行卡号的组成和校验。银行卡一般长下面这样：</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/blog/static/bank-card-example-1726aa1bd4abe9cab25b98c1586433f7-ea699.jpg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 234px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 62.82051282051282%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAQBAwX/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAABz63ZhkZK/8QAHRAAAgIBBQAAAAAAAAAAAAAAAQIAAxIEERMUIv/aAAgBAQABBQIsccnmlJ4+vFo2aivz/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAHhAAAgAGAwAAAAAAAAAAAAAAAAEREiExMkFRgaH/2gAIAQEABj8CTmubHV3MvCM0eh13wf/EABsQAQADAAMBAAAAAAAAAAAAAAEAEUEhMWGB/9oACAEBAAE/Iaos4LsgD39rH3We/CFJKSqMjGc4j//aAAwDAQACAAMAAAAQTM//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/ED//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/ED//xAAdEAEBAAIBBQAAAAAAAAAAAAABEQAhMUGhwfDx/9oACAEBAAE/EKd0VsHKIaejnNc4iK1goOadfrABIt6vfJNKrITQeM//2Q==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="bank card example"\n        title=""\n        src="/blog/static/bank-card-example-1726aa1bd4abe9cab25b98c1586433f7-ea699.jpg"\n        srcset="/blog/static/bank-card-example-1726aa1bd4abe9cab25b98c1586433f7-a5a9b.jpg 148w,\n/blog/static/bank-card-example-1726aa1bd4abe9cab25b98c1586433f7-ea699.jpg 234w"\n        sizes="(max-width: 234px) 100vw, 234px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<blockquote>\n<p>银行卡号：<strong>6225768888888888</strong></p>\n</blockquote>\n<h3>1.1 卡号组成</h3>\n<p>银行卡号一般是 16 位（信用卡/借记卡）或 19 位（借记卡）</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>  /--MII      \n_/     /--IIN(BIN)\n      /     /--个人账户标识，长度 6-12 位\n_____/ ____/ _/--校验位\n622576 8...8 8</code></pre>\n      </div>\n<p><strong>第 1 位</strong></p>\n<p>卡号首位表示主要产业标识符(<a href="https://en.wikipedia.org/wiki/ISO/IEC_7812">Major Industry Identifie, MII</a>)，由国际标准化组织于1989年首次发布，通过该值可以区分卡号的发行者所属行业，所有取值见下表：</p>\n<table>\n<thead>\n<tr>\n<th>卡号首位</th>\n<th>发行者类别</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>0</td>\n<td><a href="https://en.wikipedia.org/wiki/ISO/TC_68">ISO/TC 68</a>\n及其他行业</td>\n</tr>\n<tr>\n<td>1</td>\n<td>航空</td>\n</tr>\n<tr>\n<td>2</td>\n<td>航空、金融和其他未来行业</td>\n</tr>\n<tr>\n<td>3</td>\n<td>旅游和娱乐业</td>\n</tr>\n<tr>\n<td>4</td>\n<td>银行业和金融业</td>\n</tr>\n<tr>\n<td>5</td>\n<td>银行业和金融业</td>\n</tr>\n<tr>\n<td>6</td>\n<td>商业和银行金融业</td>\n</tr>\n<tr>\n<td>7</td>\n<td>使用和其他未来行业</td>\n</tr>\n<tr>\n<td>8</td>\n<td>医疗、电信和其他未来行业</td>\n</tr>\n<tr>\n<td>9</td>\n<td>国家标准机构</td>\n</tr>\n</tbody>\n</table>\n<p><strong>第 1-6 位</strong></p>\n<p>卡号前 6 位表示发行者标识代码(<a href="https://en.wikipedia.org/wiki/Payment_card_number#Issuer_identification_number_.28IIN.29">Issuer Identification Number, IIN</a>)，也称位发卡行识别码(Bank Identification Number, BIN)，包含第 1 位产业标识符 MII，通过 IIN 可以区分卡号的发行机构。</p>\n<table>\n<thead>\n<tr>\n<th>发布网</th>\n<th>IIN 范围</th>\n<th>长度</th>\n<th>校验算法</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>中国银联(China UnionPay)</td>\n<td>62</td>\n<td>16-19</td>\n<td>Luhn algorithm</td>\n</tr>\n<tr>\n<td>美国运通(American Express)</td>\n<td>34,37</td>\n<td>15</td>\n<td>Luhn algorithm</td>\n</tr>\n<tr>\n<td>Visa</td>\n<td>4</td>\n<td>13,16,19</td>\n<td>Luhn algorithm</td>\n</tr>\n<tr>\n<td><a href="https://en.wikipedia.org/wiki/Payment_card_number#Issuer_identification_number_.28IIN.29">more…</a></td>\n<td>.</td>\n<td>.</td>\n<td>.</td>\n</tr>\n</tbody>\n</table>\n<p><strong>第 7-X 位(长度可变，6-12位)</strong>\n除去卡号前 6 位和最后 1 位，中间数字表示个人账号标识，中间数字由发行机构自定义，由6-12位数字组成。每个银行的个人账号标识规则有所不同。有的银行在这部分内容中会包含分行、支行、储蓄网点等代码信息。有得银行可能就没有这么详细，会使用自然流水顺序码。</p>\n<p><strong>最后 1 位</strong></p>\n<p>最后 1 位表示校验位，由卡号前面的数字(不含最后 1 位)采用<a href="https://en.wikipedia.org/wiki/Luhn_algorithm">Luhn算法</a>计算得出。</p>\n<h3>1.2 卡号校验</h3>\n<p>卡号的最后一位都是通过<a href="https://en.wikipedia.org/wiki/Luhn_algorithm">Luhn算法</a>进行计算或校验。luhn 算法也称为“mod 10”算法(源于算法最后一步操作是模10)，它是一个简单的 checksum 算法。使用 luhn 算法校验的数字串，最后一位是校验位，使用 luhn 算法可校验数字串是否有效。</p>\n<p>其具体算法步骤如下：</p>\n<ol>\n<li>从待校验的数字串的最右侧（校验位）开始，向左遍历，奇数位数字累加，偶数位数字进行下面处理后的结果累加\n1.1 偶数位数字乘以 2 后，如果结果大于 9，则将结果的个位和十位相加后返回（16: 1+6=7），否则返回结果</li>\n<li>上一步累加的结果模 10 后，如果结果为 0，则数字串是有效的，否则是无效的</li>\n</ol>\n<p>假设数字串为<code>7992739871x</code>（<code>x</code>是校验位），下面是算法第 1 步的计算过程示例：</p>\n<table>\n<thead>\n<tr>\n<th>数字串</th>\n<th>7</th>\n<th>9</th>\n<th>9</th>\n<th>2</th>\n<th>7</th>\n<th>3</th>\n<th>9</th>\n<th>8</th>\n<th>7</th>\n<th>1</th>\n<th>x</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>乘以2</td>\n<td>7</td>\n<td><strong>18</strong></td>\n<td>9</td>\n<td><strong>4</strong></td>\n<td>7</td>\n<td><strong>6</strong></td>\n<td>9</td>\n<td><strong>16</strong></td>\n<td>7</td>\n<td><strong>2</strong></td>\n<td>x</td>\n</tr>\n<tr>\n<td>处理</td>\n<td>7</td>\n<td>9</td>\n<td>9</td>\n<td>4</td>\n<td>7</td>\n<td>6</td>\n<td>9</td>\n<td>7</td>\n<td>7</td>\n<td>2</td>\n<td>x</td>\n</tr>\n</tbody>\n</table>\n<p>luhn 校验算法的 JavaScript 实现如下：</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token comment">/**\n * luhn check algorightm\n * @param {string} input - card NO\n * @returns {boolean} return true if input is valid, otherwise return false\n */</span>\n<span class="token keyword">function</span> <span class="token function">luhnCheck</span><span class="token punctuation">(</span>input<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">var</span> sum <span class="token operator">=</span> <span class="token number">0</span>\n    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> input<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">>=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token operator">--</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">var</span> digit <span class="token operator">=</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>input<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token punctuation">(</span>i <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">===</span> <span class="token number">0</span> <span class="token operator">?</span> <span class="token number">2</span> <span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">)</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span>digit <span class="token operator">&lt;=</span> <span class="token number">9</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            sum <span class="token operator">+=</span> digit   \n        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n            sum <span class="token operator">+=</span> <span class="token punctuation">(</span>digit <span class="token operator">%</span> <span class="token number">10</span> <span class="token operator">+</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>digit <span class="token operator">/</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">return</span> sum <span class="token operator">%</span> <span class="token number">10</span> <span class="token operator">===</span> <span class="token number">0</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>上面的校验算法仅校验卡号是否符合规则，实际应用还需要根据具体场景校验卡号的开头位和长度等，下面是银联卡号完整的校验函数：</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token comment">// return true if input is a valid bank card no, otherwise return false</span>\n<span class="token keyword">function</span> <span class="token function">checkBankCardNo</span> <span class="token punctuation">(</span>input<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token regex">/^62(\\d{14}|\\d{17})$/</span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>input<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token function">luhnCheck</span><span class="token punctuation">(</span>input<span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>上面两段代码的在线示例：<a href="https://runkit.com/whinc/luhn-check-algorithm">https://runkit.com/whinc/luhn-check-algorithm</a></p>\n<p>参考：</p>\n<ul>\n<li><a href="https://en.wikipedia.org/wiki/Payment_card_number">Payment card number | wikipedia</a></li>\n<li><a href="https://en.wikipedia.org/wiki/Luhn_algorithm">Luhn algorithm | wikipedia</a></li>\n<li><a href="https://www.zhihu.com/question/20880750#answer-4771564">银行卡号各个数字是什么含义？ | 知乎</a></li>\n</ul>\n<h2>2. 身份证号（ID Card Number）</h2>\n<p>中国居民身份证</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/blog/static/id-card-example-144967b174fb520123a7da549344d982-28feb.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 299px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 69.23076923076923%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAYAAAAvxDzwAAAACXBIWXMAAAsSAAALEgHS3X78AAADtklEQVQ4yyWT3U+TZxjGe+6/sPP9A1uy7WjZEg+2mOxg7mTIyviSyVSELFswCs7NgxnFIWbOgOJAsIVWwEILbcf3xwot/aCUlpfyvm/ffrxtKS0IKFl+e3AHd57keXL/cuW6rsdguvk5tq4fsHU2Y3/YhL2jHntbLeN3a3HdrcLdVomrrQJ3ew3O+xfEfY14r2H09++xtV/A/qAeR/ePjPTc5ElrBYaxZz8Tye4SzRXZzJeIZwskUln0RJKirFDUNPayOvu5LKV0mh1dJ5kvEC/uEX91iHx0hHp0SOL1MfPzbgyu57+xni3i3swwK6WY9wdxTc+yMDXJfiJBMSmAelpAM5QEOJfR0XIFpPwusRPw3j7KwSHK0Rv+cZgw9N9vYU3fZWY7w9x2ikBCZXUjQiwcpiDLFBWFkoCW0kl2hdpCLkcoEmP8wS+Y689g7+1B2t0n8eYYm+kJhrbmBnzpAo+9Kt2eTZyeRZaiG0yEFIbcyyxMTlHMpCjmsxQ0laJQ5LVbCHX+ivTouoB+hW89hHr8L+OmLgym2z/hT+8wGtUY30ywGNvA5fOxuB4hfDLCgnAghCzJlFJJdgQwNjGAo/USc7ca6Dj7MYtO21sPl0d7ToDNBFJ53FtpFuQ03sgGcyt+AutRIsEgsVCIsM+PKsVFQAr5Ygl5wow+1M3avav8fflL1kQY6sERTrNQOHCrkVUtR/+qysiaikME0j9opb+vj77HXQyIsfb8xeigCcewldVVH0lZQhcqfVfrcLfWE1NlAXzNgkUAr9VXCaBOIJnDL6piF8AR+zgjQ0M4X7wguuyhoCpkt7fQlW0RSoYlX5ixrg4Cdy5y6bNPGLS72No7YNbSiaG3pQGvkhbADAFVY8kfYt6zwsL0NIGZaZRggB0tQUbe5lU+j7n7ER+cPsup6xberbvHqXc+5cP33sdsG8b09CGGpy1NrIi6BNUUa2qSmJZkS1RHliRS4XX0SARd2kSPS+SEQu/CPI6xEay+EKbpFaFukvEpF3MiwJc9AnjeaGQxKnPH7qexz0PrsJeWAQ+DzmV87glG+59j7T3x0MzLkxE2WE88HrTwzDrE6Mw8AVkjmMnh6BXAlou1ArjNUiyOJ6bgi8ZFcSWR7hqK348WCKKJomvR6P8jCp8Qd/GAn0h4g+DGFl6xsyIlMP/ZLn5K4xfUVBix3G7iRtN3VFZUUPWNkcrycmrPlXG+7Guaa6qoKz/HlepKcZbRWPUtVyqNNFRXc+Ny/dudP641YTz9Ef8BNUGD2nyZONcAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="id card example"\n        title=""\n        src="/blog/static/id-card-example-144967b174fb520123a7da549344d982-28feb.png"\n        srcset="/blog/static/id-card-example-144967b174fb520123a7da549344d982-58d0d.png 148w,\n/blog/static/id-card-example-144967b174fb520123a7da549344d982-bd2b0.png 295w,\n/blog/static/id-card-example-144967b174fb520123a7da549344d982-28feb.png 299w"\n        sizes="(max-width: 299px) 100vw, 299px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<blockquote>\n<p>身份证号：<strong>11204416541220243X</strong></p>\n</blockquote>\n<h3>2.1 卡号组成</h3>\n<p>身份证号码一共有18位数字，各位数字代表的含义：</p>\n<ul>\n<li>第<code>1,2</code>位数字表示：所在省份的代码； </li>\n<li>第<code>3,4</code>位数字表示：所在城市的代码； </li>\n<li>第<code>5,6</code>位数字表示：所在区县的代码；</li>\n<li>第<code>7-14</code>位数字表示：出生年、月、日； </li>\n<li>第<code>15,16</code>位数字表示：所在地的派出所的代码；</li>\n<li>第<code>17</code>位数字表示性别：奇数表示男性，偶数表示女性； </li>\n<li>第<code>18</code>位数字是校检码：根据前面十七位数字码，按照ISO 7064:1983.MOD 11-2校验码计算出来的校验码，取值 0-10（10 用 X 表示）。</li>\n</ul>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>     /-省份代码      /-出生年月日(YYYYMMDD）\n    /  /-城市代码   /  /-所在地派出所代码\n   /  /  /-区县代码/  / /-性别(奇-男，偶-女)\n__/__/__/________/__/_/_/-校验位\n11 20 44 16541220 24 3 X</code></pre>\n      </div>\n<p><strong>省市区(县)代码</strong></p>\n<p>我们把身份证前六位地址码码，按ABCDEF表示。</p>\n<p>AB 表示身份证主人所在的省(直辖市、自治区、特别行政区)代码。</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>11-15 京 津 冀 晋 蒙\n21-23 辽 吉 黑\n31-37 沪 苏 浙 皖 闽 赣 鲁\n41-46 豫 鄂 湘 粤 桂 琼\n50-54 渝 川 贵 云 藏\n61-65 陕 甘 青 宁 新\n81-82 港 澳</code></pre>\n      </div>\n<p>CD 表示地区代码（地级），省的城市代码从省会开始排，只有地级城市有独立的城市代码，而县级市没有。</p>\n<p>EF 表示为县区代码（市辖区、郊区、郊县、县级市）。</p>\n<p>例如，广东省深圳市南山区，对应的身份证前 6 位是<code>440305</code></p>\n<p>完整的全国省市区（县）代码可以参考中华人民共和国国家统计局<a href="http://www.stats.gov.cn/tjsj/tjbz/xzqhdm/201703/t20170310_1471429.html">最新县及县以上行政区划代码（截止2016年7月31日）</a>。</p>\n<p><strong>出生日期</strong></p>\n<p>按照格式<code>YYYYMMDD</code>表示，例如公历一九九一年一月一日出生对应的日期为<code>19910101</code></p>\n<p><strong>派出所代码</strong></p>\n<p>暂未查到官方的派出所代码出处，如果你知道，恳请在评论里告诉我。</p>\n<h3>2.2 身份证校验</h3>\n<p>身份证号最后一位使用ISO 7064:1983.MOD 11-2算法得出，其算法很简单，一句话描述：将每位数字与其对应的权重的乘积之和模11后查表。具体的计算过程见下面：</p>\n<p><strong>第一步：计算权重之和</strong></p>\n<p>每位数字拥有不同的权重<code>Wi</code>，其计算方法如下：</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>c = ∑(ai·Wi) mod 11, i=(1, 18], i ∈ N</code></pre>\n      </div>\n<p>公式说明：\n<code>i</code>:表示号码字符从右至左（包括校验码在内）的位置序号，最右侧数字 i 为 1，计算时不包含最侧的校验位；\n<code>ai</code>:表示第<code>i</code>位置上的号码字符值；\n<code>Wi</code>:示第<code>i</code>位置上的加权因子，其数值依据公式<code>Wi=2^(i-1）mod 11</code>计算得出。 </p>\n<p>由于身份证号固定 18 位，可以预先计算出所有权重值，后续查表加快校验过程。</p>\n<table>\n<thead>\n<tr>\n<th>i</th>\n<th>18</th>\n<th>17</th>\n<th>16</th>\n<th>15</th>\n<th>14</th>\n<th>13</th>\n<th>12</th>\n<th>11</th>\n<th>10</th>\n<th>9</th>\n<th>8</th>\n<th>7</th>\n<th>6</th>\n<th>5</th>\n<th>4</th>\n<th>3</th>\n<th>2</th>\n<th>1</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Wi</td>\n<td>7</td>\n<td>9</td>\n<td>10</td>\n<td>5</td>\n<td>8</td>\n<td>4</td>\n<td>2</td>\n<td>1</td>\n<td>6</td>\n<td>3</td>\n<td>7</td>\n<td>9</td>\n<td>10</td>\n<td>5</td>\n<td>8</td>\n<td>4</td>\n<td>2</td>\n<td>1</td>\n</tr>\n</tbody>\n</table>\n<p><strong>第二步：将上一步结果模 11 后查表</strong></p>\n<p>计算出<code>c</code>后，根据下表查出对应的校验码：</p>\n<table>\n<thead>\n<tr>\n<th>j</th>\n<th>0</th>\n<th>1</th>\n<th>2</th>\n<th>3</th>\n<th>4</th>\n<th>5</th>\n<th>6</th>\n<th>7</th>\n<th>8</th>\n<th>9</th>\n<th>10</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Q</td>\n<td>1</td>\n<td>0</td>\n<td>X</td>\n<td>9</td>\n<td>8</td>\n<td>7</td>\n<td>6</td>\n<td>5</td>\n<td>4</td>\n<td>3</td>\n<td>2</td>\n</tr>\n</tbody>\n</table>\n<p>上面的表格是通过下面公式计算出来的：</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>Q = (12-j) mod 11, j=[0, 10], j ∈ N</code></pre>\n      </div>\n<p>算法的 JavaScript 实现如下：</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token comment">/**\n * Check input ID card no. is valid or not\n * @param {string} input - ID card no.\n * @returns return true if input card no. is valid, otherwise return false \n */</span>\n<span class="token keyword">function</span> <span class="token function">checkIDCardNo</span><span class="token punctuation">(</span>input<span class="token punctuation">)</span>  <span class="token punctuation">{</span>\n    <span class="token keyword">var</span> sum <span class="token operator">=</span> <span class="token number">0</span>\n    <span class="token keyword">var</span> W <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span>\n    <span class="token keyword">var</span> Q <span class="token operator">=</span> <span class="token string">\'10X97865432\'</span>\n    \n    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> input<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token operator">++</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        sum <span class="token operator">+=</span> input<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">*</span> W<span class="token punctuation">[</span>i<span class="token punctuation">]</span>\n    <span class="token punctuation">}</span>\n    \n    <span class="token keyword">return</span> Q<span class="token punctuation">[</span>sum <span class="token operator">%</span> <span class="token number">11</span><span class="token punctuation">]</span> <span class="token operator">===</span> input<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>上面的校验算法仅身份证号是否符合 MOD 11 校验规则，实际应用还需要校验卡号的长度和类型，下面是身份证号完整的校验函数：</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token comment">// return true if input is a valid ID card no., otherwise return false</span>\n<span class="token keyword">function</span> <span class="token function">checkIDCardNo2</span> <span class="token punctuation">(</span>input<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token regex">/^\\d{17}(\\d|X)$/</span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>input<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token function">checkIDCardNo</span><span class="token punctuation">(</span>input<span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>上面两段代码的在线示例：<a href="https://runkit.com/whinc/5a31213aeb0c1a0011c3af56">https://runkit.com/whinc/5a31213aeb0c1a0011c3af56</a></p>\n<p>参考：</p>\n<ul>\n<li><a href="https://en.wikipedia.org/wiki/Resident_Identity_Card">Resident Identity Card | wikipedia</a></li>\n<li><a href="https://en.wikipedia.org/wiki/Resident_Identity_Card#Identity_card_number">Identity Card Number | wikipeida</a></li>\n</ul>\n<h2>3 手机号（Phone Number）</h2>\n<p>中国手机号示例：<code>15975383481</code></p>\n<blockquote>\n<p>电话号码分座机号和移动手机号，二者规则不同，这里只讨论移动手机号</p>\n</blockquote>\n<h3>3.1 手机号组成</h3>\n<p>中国使用的手机号码为11位，使用 MDN 结构<code>CC + MAC + H0 H1 H2 H3 + ABCD</code>，各字段含义如下：</p>\n<p><code>CC</code>：国家码\n<code>MAC</code>：移动接入码，用于区分运营商\n<code>H0H1H2H3</code>：HLR(Home Location Register) 归属识别码，由运营商统一分配，每个移动运营商会为全国的地级市编上一个四位数代码，用于识别手机归属地\n<code>ABCD</code>：移动用户号，由各 HLR 自行分配，用于区分同一地区不同用户</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>     /-CC\n    /   /-MAC\n   /   /    /-HLR\n__/___/____/____/-ABCD\n86 134 1234 1234</code></pre>\n      </div>\n<p>中国大陆号码开头的含义及说明（不一定完整，仅作了解）：</p>\n<table>\n<thead>\n<tr>\n<th>开头</th>\n<th>含义</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><code>10</code></td>\n<td>电信服务号</td>\n<td>10010中国联通服务中心，10050中国铁通服务中心，10060中国网通服务中心，10070中国卫通服务中心，10086中国移动服务中心等。</td>\n</tr>\n<tr>\n<td><code>11</code></td>\n<td>特种服务号</td>\n<td>如110匪警，111电信内部测试，112报修，113、115国内人工长途挂号，114查号台，116国内人工长途查询，117报时，119火警等。</td>\n</tr>\n<tr>\n<td><code>12</code></td>\n<td>特殊民用号</td>\n<td>如120（医院），121（天气预报），122交通事故告警，12312保护知识产权举报中心，12315消费投诉热线，12319城建服务，12348法律咨询，12358价格举报中心，12365质量监督，12366纳税服务，12369环境保护投诉。</td>\n</tr>\n<tr>\n<td><code>13</code></td>\n<td>通信号码段</td>\n<td>130-133 归属中国联通，134-139 归属中国移动</td>\n</tr>\n<tr>\n<td><code>14</code></td>\n<td>.</td>\n<td>.</td>\n</tr>\n<tr>\n<td><code>15</code></td>\n<td>通信号码段</td>\n<td>153 归属中国联通，158-159 归属中国移动</td>\n</tr>\n<tr>\n<td><code>16</code></td>\n<td>声讯类号码</td>\n<td>如160中国电信工人信息服务接入码，166务，167吉通计算机互联网业务接入码，168声讯服务，中国电信公众多媒体网接入码等。</td>\n</tr>\n<tr>\n<td><code>17</code></td>\n<td>长途电话服务</td>\n<td>如170国内长途全自动话费查询台，173国内立接制长途半自动挂号台，176国内长途半自动查询台，177国内长途半自动班长台，179 IP语音服务接入码等。</td>\n</tr>\n<tr>\n<td><code>18</code></td>\n<td>通信号码段，服务号</td>\n<td>如180邮政服务，184邮政编码查询接入码，185国家邮政局电话信息服务接入码，186移动服务中心，188固定电话交费台，189中国电信业务受理特服台等。</td>\n</tr>\n<tr>\n<td><code>19</code></td>\n<td>寻呼接入</td>\n<td>191联通无线电人工寻呼接入码，192联通无线电自动寻呼接入码等等。</td>\n</tr>\n<tr>\n<td><code>20</code>\n,\n<code>30</code></td>\n<td>电话卡服务</td>\n<td></td>\n</tr>\n<tr>\n<td><code>8</code>\n,\n<code>9</code></td>\n<td>电信及民用服务号</td>\n<td>95501深圳发展银行，95502永安财产保险，95505天安保险，95508广州发展银行</td>\n</tr>\n</tbody>\n</table>\n<h3>3.2 手机号的校验</h3>\n<p>根据上面表格整理的号码含义，可制定下面校验规则：</p>\n<ol>\n<li>号码长度为 11 位</li>\n<li>号码首位是<code>1</code></li>\n<li>\n<p>号码的第 2 位可以是<code>3,4,5,7,8</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token comment">/**</span>\n</code></pre>\n      </div>\n</li>\n<li>check is input phone no. is valid</li>\n<li>@param {string} input - input phone no.</li>\n<li>\n<p>@returns return true if input is a valid phone no., otherwise return false\n*/\nfunction checkPhoneNo(input) {\nreturn /^1<a href="">3|4|5|7|8</a>\\d{8}$/.test(input)\n}</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code></code></pre>\n      </div>\n</li>\n</ol>\n<p>上面代码的在线示例：<a href="https://runkit.com/whinc/5a3274f8c8531200128328a7">https://runkit.com/whinc/5a3274f8c8531200128328a7</a></p>\n<p>参考</p>\n<ul>\n<li><a href="https://en.wikipedia.org/wiki/Telephone_numbers_in_China">Telephone numbers in China | wikipedia</a></li>\n<li><a href="http://baike.sogou.com/v23265397.htm?fromTitle=%E6%89%8B%E6%9C%BA%E5%8F%B7%E7%A0%81">手机号码 | 搜狗百科</a></li>\n<li><a href="http://www.360doc.com/content/12/0620/01/5733130_219320179.shtml">手机、电话号码编码组成及号段分配</a></li>\n</ul>\n<h2>4. 小结</h2>\n<p>本文总结了常见的银行卡号、身份证号和手机号的组成及校验方法，并提供了完整的示例代码。</p>',frontmatter:{title:"银行卡号/身份证号/手机号的组成及校验",date:"December 15, 2017"}}},pathContext:{slug:"/common/introduction-to-phone-card-id-no/",previous:{fields:{slug:"/react/introduction-to-redux/"},frontmatter:{title:"10 分钟理解 Redux"}},next:!1}}}});
//# sourceMappingURL=path---common-introduction-to-phone-card-id-no-58149a6ffa3d5e7ef9c8.js.map