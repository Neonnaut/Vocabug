function getLexExample(example) {
    var choice = '';

    if (example == "basic") {
        choice = `# See the full documentation below for full details.

# These set up assimilations ("np" will be changed to "mp") and a few other
# minor things. It is possible for assimilations to produce phonemes you
# don't want, which is why one of the filters below is: ŋ > n.
with: std-ipa-features std-assimilations coronal-metathesis

# This determines the sort order of the output, and also helps
# the 'with:' line settings understand what is going on.
letters: ꞌ a á b ch d e g h i k l m n o p r s t u w y

# THE ORDER OF PHONEME CLASSES MATTERS. The very first phoneme will be
# picked much, much more often than the last. The order here is approximately
# natural for a lot of languages. You can change the character of a language
# a lot by shuffling which phonemes occur most often, or the least.
C = t n k m ch l ꞌ s r d h w b y p g
V = a i e á u o
F = n l ꞌ t k r p

# Macros are only a convenience to reduce typing, and do simple
# substitution. You can't use macros inside other macros.
$S = CVF?

# The first word shape will be picked most often, the last least often.
words: V?$S$S V?$S V?$S$S$S

# Rejections and filters use Javascript regular expressions.
# 'reject:' removes a word. 'filter' turns patterns into something else.
reject: wu yi w$ y$ h$ ꞌꞌ (p|t|k|ꞌ)h
filter: nr > tr; mr > pr; ŋ > n

# Haplology - remove repeats.
reject: (..+)\\1+`;
    } else if (example == "tonal") {
        choice = `# A tonal language with a slightly odd phoneme inventory.
# Turn on "Show generation steps" and select a number of words to
# see how this operates.

C = t n k l ch m kw v j tl y d tw s zh f g sh dw w t' z gh k' sw ng zw gw ch' nw kh tl' ngw ny kw' ɬ ghw khw b dl p
F = n m s ng ɬ t kh k khw p
U = a i u e ou ei o
V = a i e u ou ai oi au o ei eu 

# I fake tone with digits.  Because the tones are not in a power
# distribution, I give explicit weights, with the unmarked, middle tone
# occurring most often, and the contour tone the least often.  The
# digits are converted to something more familiar at the end of the
# definition.
T = 0:1.5 1:1 2:1 3:0.5

# Make optional elements - marked with '?' - occur 35% of the time.
random-rate: 35

words: CUTF? CVT UTF? VT

filter: yi > i
filter: wau > wai

# Simplify labiovelars.  Purely arbitrary substitution, but one that
# results in still legal diphthongs.
% o u
w wa we

reject: nyi nye o$ o1$ o2$ o3$ e$ e1$ e2$ e3$ 

# Turn tone numbers into diacritics.
% 0 1 2 3
a a á à ǎ
e e é è ě
i i í ì ǐ
o o ó ò ǒ
u u ú ù ǔ`;
    } else if (example == "australian") {
        choice = `random-rate: 18
# This does not represent a single Australian language, but produce something
# Australian looking. The glottal stop and lack of retroflex stops make it
# not an 'average' Australian language word list, but not unusual.
# I use <ṫ ṅ ň č> for [t̪ n̪ ɲ c] and <R, @> for length and coda-matching.
# <ṫ ṅ ŋ ň č ʎ j ɻ r ʔ> romanise as <th nh ng ny j ly y r rr ꞌ> at the end.

# CONSONANTS:
# p ṫ t (ʈ) č k ʔ
# m ṅ n (ɳ) ň ŋ
#     r  ɻ  j w
#     l  ʎ

# Initials:
I = k p m w S č ŋ j t ň n ʎ ṫ
J = k p m w č ŋ j t ň n ʎ ṫ # For disyllabic words
# Medials
C = k m ɻ l r n č p ŋ t ň ṫ w j ṅ ʎ ʔ
# Finals
F = @n @l @r @ɻ @x @ň @lq @rq @ɻq

# VOWELS: a aa i ii u uu ee oo; things happen to <ee> and <oo> later on.
V = a:45 i:39 u:37 oR:2 eR:2 aR:2 iR:2 uR:2 ai:1

# Syllable shapes: (C)V(F), CVFNCV. (C is optional ONLY word initially).
# <l r ɻ ṅ> DON'T occur word initially. ONLY <n ň l r ɻ> occur word finally.
# Disylabic words DON'T begin with a vowel
# NO monosyllabic words
$S = CVF?
$T = IVF?
$X = JVF?

words: $T$S$S$S $T$S$S$S$S $T$S$S $X$S $T$S$S$S$S$S $T$S$S$S$S$S$S

# Get vowel initial words
filter: S>!

# The following consonant clusters are permissible:
# <k / t> + <p>
# <ṫ / ṅ> + <ʔ>
# [nasal] + [homorganic stop]
# <ɻ> + [peripheral stop] / <ʈ>
# <ɻ> + [non-palatal nasal] / <ɳ>
# <ɻ> + [non-palatal nasal] / <ɳ> + [homorganic stop]
# <l> + [non-apical stop]
# <l> + [peripheral nasal]
# <l> + [nonapical nasal] + [homorganic stop]
# <r> + [peripheral stop]
# <r> + [peripheral non-palatal nasal]
# <r> + [peripheral nasal] + [homorganic stop]

%   p    ṫ    t    č    k    m   ṅ   ŋ   n   ň ʔ y w ʎ r ɻ l
@n  @mp  @ṅṫ  @nt  @ňč  @ŋk  m   ṅ   ŋ   n   ň ʔ y w ʎ r ɻ l
@ň  p    ṫ    t    č    k    m   ṅ   ŋ   n   ň ʔ y w ʎ r ɻ l
@l  @lp  @lṫ  t    @lč  @lk  @lm @lṅ @lŋ n   ň ʔ y w ʎ r ɻ l
@r  @rp  ṫ    t    @rč  @rk  @rm ṅ   @rŋ n   ň ʔ y w ʎ r ɻ l
@ɻ  @ɻp  @ɻʈ  t    @ɻč  @ɻk  @ɻm ṅ   @ɻŋ @ɻɳ ň ʔ y w ʎ r ɻ l
@x  p    @ṫʔ  @tp  č    @kp  m   @ṅʔ ŋ   n   ň ʔ y w ʎ r ɻ l
@lq @lmp @lṅṫ t    @lňč @lŋk m   ṅ   ŋ   n   ň ʔ y w ʎ r ɻ l
@rq @rmp ṫ    t    @rňč @rŋk m   ṅ   ŋ   n   ň ʔ y w ʎ r ɻ l
@ɻq @ɻmp @ɻɳʈ t    @ɻňč @ɻŋk m   ṅ   ŋ   n   ň ʔ y w ʎ r ɻ l

# <ee> and <oo> cannot be word initial or final.
filter: ^eR > i; ^oR > u; eR$ > i; oR$ > u

# Long vowels become short before a consonant cluster or <ʔ>
%  @  ʔ
oR o@ oʔ
uR u@ uʔ
eR e@ eʔ
iR i@ iʔ
aR a@ aʔ

# Restrict the occurance of <ai>
%  ʔ  č  ŋ  ň  j  w  ʎ  r  ɻ  ɳ  ʈ  @ň  @r  @l  @ɻ  @n  @x  @lq  @rq  @ɻq
ai aʔ ač aŋ aň aj aw aʎ ar aɻ aɳ aʈ a@ň a@r a@l a@ɻ a@n a@x a@lq a@rq a@ɻq

# Long vowels become short at the beginning of a word
filter: ^aR>a; ^iR>a; ^uR>u; ^ai>a

# i → e / #C[+palatal]aC[-palatal]_
%   pi   ṫi   ti   ki   mi   ṅi   ŋi   ni   ňi   ʔi   wi   ri   ɻi   li
^ja jape jaṫe jate jake jame jaṅe jaŋe jane jaňe jaʔe jawe jare jaɻe jale
^ča čape čaṫe čate čake čame čaṅe čaŋe čane čaňe čaʔe čawe čare čaɻe čale
^ʎa ʎape ʎaṫe ʎate ʎake ʎame ʎaṅe ʎaŋe ʎane ʎaňe ʎaʔe ʎawe ʎare ʎaɻe ʎale
^ňa ňape ňaṫe ňate ňake ňame ňaṅe ňaŋe ňane ňaňe ňaʔe ňawe ňare ňaɻe ňale

# a → i / #C[+palatal]V[-long]C[-palatal]_
%   pa   ṫa   ta   ka   ma   ṅa   ŋa   na   ňa   ʔa   wa   ra   ɻa   la
^ja japi jaṫi jati jaki jami jaṅi jaŋi jani jaňi jaʔi jawi jari jaɻi jali
^ju jupi juṫi juti juki jumi juṅi juŋi juni juňi juʔi juwi juri juɻi juli
^ʎa ʎapi ʎaṫi ʎati ʎaki ʎami ʎaṅi ʎaŋi ʎani ʎaňi ʎaʔi ʎawi ʎari ʎaɻi ʎali
^ʎu ʎupi ʎuṫi ʎuti ʎuki ʎumi ʎuṅi ʎuŋi ʎuni ʎuňi ʎuʔi ʎuwi ʎuri ʎuɻi ʎuli
^ča čapi čaṫi čati čaki čami čaṅi čaŋi čani čaňi čaʔi čawi čari čaɻi čali
^ču čupi čuṫi čuti čuki čumi čuṅi čuŋi čuni čuňi čuʔi čuwi čuri čuɻi čuli
^či čipi čiṫi čiti čiki čimi čiṅi čiŋi čini čiňi čiʔi čiwi čiri čiɻi čili
^ňa ňapi ňaṫi ňati ňaki ňami ňaṅi ňaŋi ňani ňaňi ňaʔi ňawi ňari ňaɻi ňali
^ňu ňupi ňuṫi ňuti ňuki ňumi ňuṅi ňuŋi ňuni ňuňi ňuʔi ňuwi ňuri ňuɻi ňuli
^ňi ňipi ňiṫi ňiti ňiki ňimi ňiṅi ňiŋi ňini ňiňi ňiʔi ňiwi ňiri ňiɻi ňili

# <ji>, <ʎi> and <wu> become <je>, <ʎe> and <wo>
filter: jiR>je; wuR>wo; ʎiR>ʎe; ji>je; ʎi>ʎe; wu>wo
filter: je$>ju; wo$>ŋu; ʎe$>ʎa;
filter: e$>i; o$>u; eR$>i; oR$>u; 
 
filter: @x>!; q>!; @>!;
filter: oR>oo; eR>ee; iR>ii; uR>uu; aR>aa

# Romaniser:
filter: r>rr; ɻ>r; ṅ>nh; ṫ>th; ʔ>ꞌ; ŋ>ng; ʈ>t; ɳ>n;
filter: ň>ny; ʎ>ly; j>y; č>j;`;
    } else if (example == "japanese") {
        choice = `# Japanese-like based on interpreting wikipedia.org/wiki/Japanese_phonology 
# and link.springer.com/content/pdf/10.3758/BF03195600.pdf

# <X> gives me onsetless morae.    <R> gives me long vowels
# <N> is the syllable final nasal. <Q> gives me geminate consonants

C = k:45 t:39 s:33 r:25 n:20 X:15 h:10 m:10 d:8 g:8 z:4 b:4 w:3 p:2
I = k:45 X:40 t:39 s:33 n:20 m:10 h:8 d:6 g:6 r:4 z:2 b:2 w:2 p:2
V = a:233 i:226 u:215 o:204 e:190 ya:8 yu:8 yo:8 oR:2 aR:2 iR:2 eR:2 uR:1
W = a:223 i:216 u:205 o:194 e:180 ya:5 yu:5 yo:5
Y = oR:12 aR:12 iR:12 eR:11 uR:5 yoR:2 yaR:1 yaR:1 yuR:1
F = N Q

random-rate: 5
$S = CVF? # Gives type C(y)V(R)(N/Q).
$A = IVF? # First syllable of slightly different consonant distribution.

$L = CW # C(y)V, light syllable type
$H = CY # C(y)VR, Heavy syllable of long vowel
$J = CVF # C(y)V[N/Q], heavy syllable of <N> or <Q>

# Where light syllable is of type (C)V, and heavy is (C)[VF,VR(F)].
# The final two syllables are least likely to be light followed by heavy.

words: $S:12 $A$L$L:19 $A$S$L$L:16 $A$S$S$L$L:10 $A$L:8 $A$L$H:1 $A$S$L$H:1 $A$S$S$L$H:1 $A$H:1 $A$L$J:1 $A$S$L$J:2 $A$S$S$L$J:1 $A$J:1 $A$H$L:7 $A$S$H$L:7 $A$S$S$H$L:4 $A$L:3 $A$J$L:22 $A$S$J$L:18 $A$S$S$J$L:18 $A$L:10 $A$H$H:1 $A$S$H$H:1 $A$S$S$H$H:1 $A$H:1 $A$H$J:1 $A$S$H$J:1 $A$S$S$H$J:1 $A$J:1 $A$J$J:2 $A$S$J$J:2 $A$S$S$J$J:2 $A$J:1 $A$J$H:2 $A$S$J$H:2 $A$S$S$J$H:2 $A$J:1

# "Yotsugana": <dz> and <dj> neutralise to <z> and <j>
%  i   u   e   o   ya   yu   yo
s  ši  +   +   +   ša   šu   šo
z  ji  +   +   +   ja   ju   jo 
t  či  cu  +   +   ča   ču   čo
d  ji  zu  +   +   ja   ju   jo
h  hi  fu  +   +   +    +    +
w  Xi  wa  Xe  Xo  ya   yu   yo

filter: N(?=X) > n' # <N> + <onsetless syllable> is <n'>.

# <N> assimilation, and <Q> gemination.
% č    š    c   j  k   g  s   z  t   d  n  h   b  p   m  r  l  f   w
Q Qtč  Qšš  Qtc j  Qkk g  Qss z  Qtt d  n  Qpp b  Qpp m  r  l  Qpp Qpp
N nč   nš   nc  nj nk  ng ns  nz nt  nd nn nh  mb mp  mm nr nl nf  nw

filter: RQ>!; Q>!; N>n; # <R> + <Q> is illegal.

filter: c>ts; č>ch; š>sh; # This was to stop <chu> becoming <cfu>.

# Vowel sequences:
filter: X > ! # Get onsetless morae
%  a   i   u   e  o
a  a   ai  oo  ae ai
i  ya  i   yuu ie io
u  wa  ui  u   ai ai
e  ee  ei  yoo e  yo
o  oo  oi  ou  oe o

filter: aR>aa; eR>ee; iR>ii; oR>oo; uR>uu # Get long vowels

# Overlong vowels become long vowels.
filter: aa+>aa; ee+>ee; ii+>ii; oo+>oo; uu+>uu;

# Collapse aa ee ii oo uu words into short vowels.
filter: ^aa$>a; ^ee$>e; ^ii$>i; ^oo$>o; ^uu$>u;`;
    } else if (example == "hungarian") {
        choice = `# This isn't quite Hungarian, but approximates it for demonstration
# purposes.  The cluster restrictions, in particular, are based on
# Hungarian data:
#
#    http://real-d.mtak.hu/233/1/Torkenczy_Miklos.pdf
#
# But I have left out the front, rounded vowels and some of the
# palatalized consonants.

with: std-ipa-features std-assimilations coronal-metathesis

letters: a á b c d dz dʒ e é f g h i í j k kl kr l m n o ó p pr r s ʃ t tr ts tʃ u ú v z ʒ '

C = t n k tʃ s m r ʃ d h p ts v l d b ʒ dʒ f j z p g dz

# Some initial fricative + C clusters
D = s ʃ v ʒ f z
E = t n k tʃ m r p ts l v f p

# Cluster rules... notice the single quote mark, which I will use in
# the 'words:' section below, to mark of syllable boundaries.  This
# lets me more carefully craft where clusters are allowed and where
# they are forbidden.

%  p t k ts tʃ f v m n l r
'f - + - -  -  - - - - + +
'v - - - -  -  - - - - + -
's + + + +  -  + + + + + -
'ʃ + + - -  +  - + + + + +
'z - - - -  -  - - - - + +
'ʒ - - - -  -  - - - - - -

# For initial complex clusters.
W = s ʃ
X = tr kr kl pr

%  pr tr kr kl
's -  +  -  +
'ʃ +  +  +  -

V = a i e á u o é í ó ú
S = s z ʃ
R = n l r m

# Vowel clusters
% i e u o a í é ú ó á
i - + + + + - + + + +
e + - + + + - - - + +
u + + - + + + - - + +
o + + - - + - + - - +
a + + + + - + - - + -
í - - - - - - - - - -
é - - - - - - - - - -
ú - - - - - - - - - -
ó - - - - - - - - - -
á - - - - - - - - - -

# Coda clusters
T = t n k tʃ s m r ʃ d p ts v l d dʒ b ʒ f j z p g dz

# This rejects a mass of final clusters, and makes word generation
# a bit slow.
%  p' t' k' b' d' g' ts' tʃ' dʒ' f' s' ʃ' v' z' ʒ' m' n' l' r' j'
p  +  +  -  -  -  -  -   -   -   +  +  +  -  -  -  -  -  -  -  -
t  -  +  +  -  -  -  -   -   -   -  -  -  -  -  -  -  -  -  -  -
k  -  -  +  -  -  -  -   +   -   -  +  +  -  -  -  -  -  -  -  -
b  -  -  -  +  -  -  -   -   -   -  -  -  -  -  -  -  -  -  -  -
d  -  -  -  -  +  -  -   -   -   -  -  -  +  +  -  -  -  -  -  -
g  -  -  -  -  +  +  -   -   -   -  -  -  -  -  -  -  -  -  -  -
ts -  -  +  -  -  -  +   -   -   -  -  -  -  -  -  -  -  -  -  -
tʃ -  -  +  -  -  -  -   +   -   -  -  -  -  -  -  -  -  -  -  -
dʒ -  -  -  -  +  -  -   -   +   -  -  -  -  -  -  -  -  -  -  -
f  -  +  -  -  -  -  -   -   -   +  -  -  -  -  -  -  -  -  -  -
s  -  +  +  -  -  -  -   -   -   -  +  -  -  -  -  -  -  -  -  -
ʃ  -  +  -  -  -  -  -   -   -   -  -  +  -  -  -  -  -  -  -  -
v  -  -  -  -  +  -  -   -   -   -  -  -  -  -  -  -  -  -  -  -
z  -  -  -  -  +  +  -   -   -   -  -  -  -  +  -  -  -  -  -  -
ʒ  -  -  -  -  +  -  -   -   -   -  -  -  -  -  -  -  -  -  -  -
m  +  +  -  -  +  -  -   -   -   +  -  -  +  +  +  +  -  -  -  -
n  -  +  +  -  +  -  +   +   +   -  +  +  +  -  -  -  +  +  -  -
l  +  +  +  +  +  +  +   +   -   +  -  +  +  -  -  +  -  +  -  -
r  +  +  +  +  +  +  +   +   -   +  +  +  +  +  +  +  +  +  +  +
j  +  +  +  -  +  +  +   +   -   +  +  +  +  +  +  +  +  +  -  -

# Words

# First, some basic syllable types, with clustering rules as defined
# above. 
# Note that all syllables have a leading quote mark, which defines
# syllable boundary, to make the cluster rules given above apply more
# precisely.

$A = 'CVV?C?
$B = 'VV?C?
$C = 'WXVV?C?

$D = 'DEVC?

$P = 'CVV?TT?
$Q = 'VV?TT?

# The actual words.
words: $P' $Q' $D $Q$P' $P$P' $A$A $C$A $C$P' $Q$D$P' $Q$A $Q$A$P' V?$A $B$A

# Reject a few vexations.
reject: j(i|í) j' h' h$ ʃs sʃ zʒ ʒz sz

# Hungarian-esque spelling
filter: ts > c; s > sz; tʃ > cs; ʒ > zs; ʃ > s; ss > s; ŋ > n

# Remove syllable boundaries.
filter: ' > !`;
    }

    if (choice == '' || choice == false || choice == null || choice == undefined) {
        return false;
    } else {
        return choice;
    }

}

export default getLexExample;