/* -------------------------------------------------------
  Coach Joel AI — Separated Script File
------------------------------------------------------- */

/* ========== CONFIG ========== */
const GEMINI_ENDPOINT = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent";
const API_KEY = "AIzaSyD94Z7p_uqLXPFmm2th9noOcEZwLWkGOqE";

const SYSTEM_PROMPT = `Role:
- Primary Function: You are Coach Joel AI who helps the InterLink Community, especially Global Ambassadors, with inquiries, issues, and requests in the InterLink Community and Ambassador Program Level 5 System. You aim to provide excellent, friendly, and efficient replies at all times. Listen attentively to the user, understand their needs, and assist or direct them to appropriate resources. If a question is unclear, ask clarifying questions. End replies with a positive note.

Style rules:
- Be concise, professional, and direct. Do not use asterisks (*) or markdown bold syntax (**).
- Use plain text for emphasis, such as ALL CAPS, or emoji bullets for clarity (✅, 🔹, 🔸, 📌).
- When listing steps or winners, use numbered lists (1., 2., 3.) or emoji bullets, not asterisks or markdown.
- Use spacing and margins for clarity without asterisks.
- End with a brief encouraging sentence.
- If sending a link, analyze whether it is legit and official in InterLink. If uncertain, ask the user if they want to explore it and provide your advice.

Constraints:
1. Use multiple languages if the user wants translation.
2. Stay focused on InterLink Labs Project. You may research it yourself and/or give feedback using the points system in the InterLink Coach House White Paper.
3. If information is missing, ask a clarifying question.
4. If outside scope, politely decline and refer to official resources.



Database: 

[Result] Task of the Day - Day 34
Telegram Username InterLink ID Total Points Ranking Reward
Kenbif3 0917397994 61 #1 30 USDT
@leduy4792 02091945 60 #2 20 USDT
Alwaysyitba 86150 60 #3 10 USDT
@Dung_InterLink_Network 33049 59 #4 5 USDT
@LeCan198791 198791 57 #5 5 USDT
@chianhtv 949444 57 #6 5 USDT
@DendySaga 7572 57 #7 5 USDT
@SpillAirdropSatoInterlink 558403 57 #8 5 USDT
@buimanhInterlink 889111 57 #9 5 USDT
@TienNhat1235 311096 57 #10 5 USDT
forInterlink 995249913756 56 #11 0
@Lanangjaya30 082236 55 #12 0
@Harytamasiagian 3624259 52 #13 0
@AhSan_Azad_07 0261518159 51 #14 0
@sukasi24 9176648709 51 #15 0
@evanada14interlink 0349291 49 #16 0
@Pxdong35 1986999 48 #17 0
@putriri05 55122094334 47 #18 0
Alhamdu242 8038969524 45 #19 0
@maungpadjajaran 53663 43 #20 0
Osamadigitalserviceltd 34034737 41 #21 0
@dwi900 90281879 41 #22 0
@PLQH2305 233004 40 #23 0
@hoanghai96z 270496 40 #24 0
@vinhpinet 38699999 40 #25 0
@trolody 011078 38 #26 0
@lonvangdocngoc 0989769658 38 #27 0
@interlinkdanang 0794848468 38 #28 0
Syarif |official InterLink Ambassador 1233215879 37 #29 0
@Myhanh281237 281237 37 #30 0
@ThienAnInterLink 456798 37 #31 0
@Kishor_Alpiki 9642538803 36 #32
0
@iluminati142 8780682243 34 #33
0
@minatozuma 099197 33 #34
0
@Anhnam09635091460963509146 31 #35
0
@earnmoneywithbbn 358583 30 #36
0
@asemach21 122119 30 #37
0
Embcsl 07048092 30 #38
0
@Hknrc 831385390 27 #39
0
@Tranngohung 0799996379 27 #40
0
@Lvr600842 60000842 27 #41
0
@cryptomentoryinterlinkambassador 211514 27 #42
0
@Zamnika 834007 27 #43
0
blogcuahai 764100 27 #44
0
Interlink109021 109021 27 #45
0
@DagiD11 597613 27 #46
0
@DaiLai8386 226668888 26 #47
0
@Dark77p 082258106522 24 #48
0
@testnetronin 82386466 24 #49
0
Andre boy | official interlink ambassador 001051982 24 #50
0
@SkayBlueV2 16586616714 24 #51
0
raystingers 352582 24 #52
0
@cghiyo 236708 22 #53
0
@nguyenhuuphuc27 95983328688 22 #54
0
@Thanhcongn79 975435279 21 #55
0
@InterlinkMonika 1572073 20 #56
0
@picuong 777709 20 #57
0
@ETHO152338 393477 20 #58
0
@zevandra21 221480 19 #59
0
ngochoa0922 090397 19 #60
0
@Jenal133 16586068633 19 #61
0
@Buiduc7 611984 19 #62
0
@Phamdong02051984356700602725 19 #63
0
@chanbh 89123 18 #64
0
@dikalzz 264976 18 #65
0
@malee2110 211001 18 #66
0
@khuongha77 02061626 18 #67
0
@Dreeamy873183 873183 18 #68
0
@THIENCA94 040444 18 #69
0
@Torven_InterLink 53516731686 18 #70
0
@daretubeNBO 8968068 18 #71
0
@BUIBAONHI 0919293949 18 #72
0
@AnhTuan8669866 8669866 17 #73
0
@Anand2893 198813242 15 #74
0
@Trivikram_V 2701026 15 #75
0
@dslakshmi29 91236600 15 #76
0
@hackersolo0 562569 15 #77
0
@superbiz1 35802865534 15 #78
0
@Trungclip 111260 15 #79
0
@goriforlife 83870876957 15 #80
0
@mom_forever 007990 15 #81
0
@theo2pii 675213 13 #82
0
@thuhangtq97 9376166 13 #83
0
bharath_klass 1952463 12 #84
0
@naraharivenkatesh 9866294383 12 #85
0
@MaheshMagnus 65996125 12 #86
0
@Sriramoju93 989477 12 #87
0
@Chicong210490 0865988559 11 #88
0
thoacamap 888899996789 11 #89
0
@Sami_806 563828 11 #90
0
@klzy67 081243740283
9 #91
0
@Anandk_2 1363127
9 #92
0
@kasi_interlinkambassdor 227574
9 #93
0
@Vucuongly 0988994784
9 #94
0
@klzy67 81243740283
9 #95
0
Abosede55 52389
9 #96
0
@lamhd1788 120519
9 #97
0
@InterlinkCryptonacht 50634867726
9 #98
0
@yogi9999 31736766
9 #99
0
@Asifmd4232 9704232970
9 #100
0
@Tanisa_Interlinklabs 512004
9 #101
0
rahmatriadi21 456852
9 #102
0
@Sam23kvn 23199223
9 #103
0
@nurithakhaisar 089532995802
9 #104
0
muhamadginda 235995
9 #105
0
@etetiyye12HT 571216
9 #106
0
@YabseraTeklemariyam19940527
9 #107
0
@h_mlkpr 200673
9 #108
0
@Legitupdates1000 290736264
9 #109
0
@phongbap98 18031999
9 #110
0
@TamAn921921 921921
8 #111
0
@massaka46 215618
6 #112
0
@mumugu1 5406450
6 #113
0
@BurarShah 30515
6 #114
0
@Hoangtrongtu199 4305552479
6 #115
0
@itzmoiiorif 0453503
6 #116
0
@Lvr600842 600842
6 #117
0
@Poornima_InterlinkAmbassador 227475
6 #118
0
dc_vers3 9078033004
6 #119
0
@johncaleb_1 523406
6 #120
0
daisy61473 daisy61473
6 #121
0
@AdindaR336 4927489
6 #122
0
@Influencer123677 542995
6 #123
0
@vijaypolakatla 2692678807
4 #124
0
Vikky007 official interlink ambassador 7987393950
3 #125
0
@klzy67 081243740284
3 #126
0
imapurba 9851909090
3 #127
0
@Solla058 058011
3 #128
0
@kaunyx 55636
3 #129
0
@Lim10cubaba 1648521
3 #130
0
@BESHIIR 757537
3 #131
0
@SIVANAIK99 995925
3 #132
0
@VankelaNaveen 9502608226
3 #133
0
@siva4434_InterlinkAmbassador 4109058027
3 #134
0
@TJNakamoto 092190
3 #135
0
@Ani_17k 86899
3 #136
0
@Username11 650606
3 #137
0
@NBSUMALATHA99998149886
3 #138
0
@Muslera27 217895
3 #139
0
eynisceferi 155953
3 #140
0
@meryem0922_InterlinkAmbassador 61221
3 #141
0
Mikideme 108962893
3 #142
0
@Yasteseryal_19 08545652
3 #143
0
Naveen4467 969241
3 #144
0

Datebase 1:
Official Ambassadors List

if they input there InterLink ID, or Telegram Username or Name Please State What is his/her Tiers (Tier 1 = Global Leader, Tier 2 = Community Builder, Tier 3 = Influencer or Contributor) and Country he/she belong, and if his/her InterLink ID, Telegram Username or Name, please tell “Your not Ambassador Yet, Please Apply if you want to become an InterLink Ambassador” if they input there InterLink ID, State which country and who is there coach as well.
Your Country	Your Coach	Your Telegram Username	Your Tier	Your Personal ID
Indonesia	Coach Joel (950150519)	@King_Fath	Tier 1	99575
Indonesia	Coach Joel (950150519)	@ZA0FFICIAL	Tier 1	530509
Indonesia	Coach Joel (950150519)	@allinrekt	Tier 1	618099
Indonesia	Coach Joel (950150519)	@Dyankhaisar	Tier 1	02032015
Indonesia	Coach Joel (950150519)	@Hamidjaya12	Tier 2	148966
Indonesia	Coach Joel (950150519)	@Putriri05	Tier 2	55122094334
Indonesia	Coach Joel (950150519)	@mimin_it	Tier 2	151002
Indonesia	Coach Joel (950150519)	@Difir1606	Tier 2	2091161996
Indonesia	Coach Joel (950150519)	@CP_PunkScalp	Tier 2	4681001
Indonesia	Coach Joel (950150519)	@ekwinbudi	Tier 2	026787
Indonesia	Coach Joel (950150519)	@Goldfvck	Tier 2	081883413667
Indonesia	Coach Joel (950150519)	@zeehunterdrop	Tier 2	10456
Indonesia	Coach Joel (950150519)	@testnetronin	Tier 2	82386466
Indonesia	Coach Joel (950150519)	@rahmatriadi21	Tier 2	456852
Indonesia	Coach Joel (950150519)	@xyeraa_id	Tier 2	951104506
Indonesia	Coach Joel (950150519)	@raystingers	Tier 2	352582
Indonesia	Coach Joel (950150519)	@Zamnika	Tier 2	834007
Indonesia	Coach Joel (950150519)	@evanada14interlink	Tier 2	0349291
Indonesia	Coach Joel (950150519)	@maungpadjajaran	Tier 2	53663
Indonesia	Coach Joel (950150519)	@Jiexsm	Tier 3	1349282
Indonesia	Coach Joel (950150519)	@Bazgheffan	Tier 3	62852569
Indonesia	Coach Joel (950150519)	@DROGBA119	Tier 3	2761107996
Indonesia	Coach Joel (950150519)	@RIZESx	Tier 3	211205
Indonesia	Coach Joel (950150519)	@therido_d	Tier 3	525285
Indonesia	Coach Joel (950150519)	@Syuhuda	Tier 3	01090949549
Indonesia	Coach Joel (950150519)	@dddhrm	Tier 3	021551555675
Indonesia	Coach Joel (950150519)	@rhmadi1	Tier 3	4116275504
Indonesia	Coach Joel (950150519)	@Belercik	Tier 3	2006212
Indonesia	Coach Joel (950150519)	Rido_Interlink	Tier 3	84124
Indonesia	Coach Joel (950150519)	@levronkaa	Tier 3	2672004
Indonesia	Coach Joel (950150519)	@Satudolarpalingminim	Tier 3	230296230296
Indonesia	Coach Joel (950150519)	@amalanapa	Tier 3	72738
Indonesia	Coach Joel (950150519)	@devlnation	Tier 3	089957
Indonesia	Coach Joel (950150519)	@Uripfa	Tier 3	040403
Indonesia	Coach Joel (950150519)	@Arasy02	Tier 3	101588
Indonesia	Coach Joel (950150519)	@NugrahaFas4	Tier 3	081095
Indonesia	Coach Joel (950150519)	@Butterplay	Tier 3	108290344
Indonesia	Coach Joel (950150519)	@Bibcans	Tier 3	58480014
Indonesia	Coach Joel (950150519)	@WongAirDrop	Tier 3	123000383
Indonesia	Coach Joel (950150519)	@MuhamadRamdani20	Tier 3	49782721
Indonesia	Coach Joel (950150519)	@web3_90	Tier 3	122085
Indonesia	Coach Joel (950150519)	@Arthurmarston1616	Tier 3	25281216
Indonesia	Coach Joel (950150519)	@Benysanjaya49	Tier 3	60004
Indonesia	Coach Joel (950150519)	@Mendem78	Tier 3	25894
Indonesia	Coach Joel (950150519)	@ari_bopih	Tier 3	9033384
Indonesia	Coach Joel (950150519)	@Hivera11	Tier 3	085692784781
Indonesia	Coach Joel (950150519)	@Aanangpras78	Tier 3	19782302
Indonesia	Coach Joel (950150519)	@Agaresssssss	Tier 3	3693301
Indonesia	Coach Joel (950150519)	@Arl28_official	Tier 3	331508280688
Indonesia	Coach Joel (950150519)	@Renday107	Tier 3	107107
Indonesia	Coach Joel (950150519)	@Dark77p	Tier 3	082258106522
Indonesia	Coach Joel (950150519)	@ellrakabuminh	Tier 3	20080307
Indonesia	Coach Joel (950150519)	@Acidboom212	Tier 3	31082121
Indonesia	Coach Joel (950150519)	@dwi900	Tier 3	90281879
Indonesia	Coach Joel (950150519)	@ecy_Auliani	Tier 3	887607
Indonesia	Coach Joel (950150519)	@Tanisa_Interlinklabs	Tier 3	512004
Indonesia	Coach Joel (950150519)	@zevandra21	Tier 3	221480
Indonesia	Coach Joel (950150519)	@Ren703	Tier 3	96403
Indonesia	Coach Joel (950150519)	@andiirahmaatt	Tier 3	396837780
Indonesia	Coach Joel (950150519)	@AdindaDA	Tier 3	4927489
Indonesia	Coach Joel (950150519)	@niadmynt	Tier 3	78592
Indonesia	Coach Joel (950150519)	@haphap96	Tier 3	0705966
Indonesia	Coach Joel (950150519)	Dikalz | InterLink Ambassador	Tier 3	264976
Indonesia	Coach Joel (950150519)	@pentelmuter	Tier 3	170803
Indonesia	Coach Joel (950150519)	@jun4301	Tier 3	43011
Indonesia	Coach Joel (950150519)	@DendySaga	Tier 3	7572
Indonesia	Coach Joel (950150519)	@Jenal133	Tier 3	16586068633
Indonesia	Coach Joel (950150519)	@KaldiusNdruru	Tier 3	26262929
Indonesia	Coach Joel (950150519)	@Syarifsuhar	Tier 3	1233215879
Indonesia	Coach Joel (950150519)	@SkayBlueV2	Tier 3	16586616714
Indonesia	Coach Joel (950150519)	@SpillAirdropSatoInterlink	Tier 3	558403
Indonesia	Coach Joel (950150519)	@Alfath2001	Tier 3	30303012
Indonesia	Coach Joel (950150519)	@samsu211	Tier 3	121691
Indonesia	Coach Joel (950150519)	Andre boy | interlink trainee ambassador	Tier 3	001051982
Indonesia	Coach Joel (950150519)	@nurithakhaisar	Tier 3	089532995802
Indonesia	Coach Joel (950150519)	@halim240202	Tier 3	240202
Indonesia	Coach Joel (950150519)	@cghiyo	Tier 3	236708
Indonesia	Coach Joel (950150519)	@Riizkar	Tier 3	83147119440
Indonesia	Coach Joel (950150519)	@Harytamasiagian	Tier 3	3624259
Indonesia	Coach Joel (950150519)	@Jpe015	Tier 3	32576198195
Indonesia	Coach Joel (950150519)	@klzy67	Tier 3	081243740283
Indonesia	Coach Joel (950150519)	@malee2110	Tier 3	211001
Indonesia	Coach Joel (950150519)	@muhamadginda	Tier 3	235995
Indonesia	Coach Joel (950150519)	@mumugu1	Tier 3	5406450
Indonesia	Coach Joel (950150519)	@goriforlife	Tier 3	083870876957
Indonesia	Coach Joel (950150519)	@kaunyx	Tier 3	55636
Indonesia	Coach Joel (950150519)	@Lanangjaya30	Tier 3	082236
Indonesia	Coach Joel (950150519)	@Owneraziz	Tier 3	251295
Indonesia	Coach Joel (950150519)	@kangyogi1	Tier 3	558001
Indonesia	Coach Joel (950150519)	@TheStriker2022	Tier 3	7911791
Indonesia	Coach Joel (950150519)	@ilhammmmaja	Tier 3	6886034
India	Coach Joel (950150519)	@wealthycrypto999	Tier 1	431877963045
India	Coach Joel (950150519)	@DhirajBadal	Tier 2	45591
India	Coach Joel (950150519)	@Vijaypolakatla	Tier 2	2692678807
India	Coach Joel (950150519)	@Maheshmagnus	Tier 1	65996125
India	Coach Joel (950150519)	@HonestCritic1	Tier 2	22114001
India	Coach Joel (950150519)	@Gklooks720780	Tier 2	485724957333
India	Coach Joel (950150519)	@Nagendra113131	Tier 2	113131
India	Coach Joel (950150519)	@Atifjaved88	Tier 2	932756
India	Coach Joel (950150519)	@Safee_interlink	Tier 2	727875
India	Coach Joel (950150519)	@Rajendrarrrr	Tier 2	6739258362
India	Coach Joel (950150519)	@imapurba	Tier 2	9851909090
India	Coach Joel (950150519)	@MMGAbdulla	Tier 2	996380
India	Coach Joel (950150519)	@bobbilianilkumar	Tier 2	1543904
India	Coach Joel (950150519)	@cryptomentoryinterlinkambassador	Tier 2	211514
India	Coach Joel (950150519)	@naraharivenkatesh	Tier 2	9866294383
India	Coach Joel (950150519)	@dslakshmi29	Tier 2	91236600
India	Coach Joel (950150519)	@Dreeamyvibes	Tier 2	873183
India	Coach Joel (950150519)	@HemanthOngole	Tier 2	111351212529
India	Coach Joel (950150519)	@InterlinkMonika	Tier 2	1572073
India	Coach Joel (950150519)	@krishna9441	Tier 2	3565856256
India	Coach Joel (950150519)	@aswani_99	Tier 3	27060612
India	Coach Joel (950150519)	@bestabadesa	Tier 3	347823748928
India	Coach Joel (950150519)	@Naveen4467	Tier 3	969241
India	Coach Joel (950150519)	@Kvvrk	Tier 3	87475515
India	Coach Joel (950150519)	@MANUPRAPU	Tier 3	717844031335
India	Coach Joel (950150519)	@Anaidu1989	Tier 3	9704380546
India	Coach Joel (950150519)	@Anushakandula	Tier 3	3956896662
India	Coach Joel (950150519)	@Interlinkkancharla	Tier 3	402234818
India	Coach Joel (950150519)	@karnMaheshwari	Tier 3	0909090909
India	Coach Joel (950150519)	@Jigar1919	Tier 3	351677169447
India	Coach Joel (950150519)	@Smilingbo	Tier 3	3572580
India	Coach Joel (950150519)	@Franky18i	Tier 3	17062501
India	Coach Joel (950150519)	@anbuchezian_InterlinkAmbassador	Tier 3	96114
India	Coach Joel (950150519)	@hellololio	Tier 3	208072457214
India	Coach Joel (950150519)	@CRYPTONEWSSR	Tier 3	998303
India	Coach Joel (950150519)	@bharath_klass	Tier 3	1952463
India	Coach Joel (950150519)	@ramijraja0786	Tier 3	3495445
India	Coach Joel (950150519)	@MGR0215	Tier 3	1155369369
India	Coach Joel (950150519)	@naga269	Tier 3	22655123
India	Coach Joel (950150519)	@Ranajit_Banerjee_9	Tier 3	408491853039
India	Coach Joel (950150519)	@vinaysagarsetti	Tier 3	522421
India	Coach Joel (950150519)	@NLakshmiRao	Tier 3	823037
India	Coach Joel (950150519)	@kompa2025	Tier 3	2853924490
India	Coach Joel (950150519)	@RAMCHANDRARAOPANGI	Tier 3	141537092
India	Coach Joel (950150519)	@InterlinkNetwork781251	Tier 3	781251
India	Coach Joel (950150519)	@PavanPokala	Tier 3	51642942
India	Coach Joel (950150519)	@GOPIDESI9	Tier 3	722593130408
India	Coach Joel (950150519)	@cryptoexpert999	Tier 3	1231785
India	Coach Joel (950150519)	@paselirajesh	Tier 3	597895049978
India	Coach Joel (950150519)	@Interlink_influencer_07629883	Tier 3	07629883
India	Coach Joel (950150519)	@Bunnyprem	Tier 3	7997736175
India	Coach Joel (950150519)	@GUNA281	Tier 3	2533128
India	Coach Joel (950150519)	@NSNI143	Tier 3	01677442842
India	Coach Joel (950150519)	@Lenin09z	Tier 3	7893276359
India	Coach Joel (950150519)	@MozaffarAli	Tier 3	1347067
India	Coach Joel (950150519)	@InterlinkMahendra	Tier 3	454089
India	Coach Joel (950150519)	@Sathish0165	Tier 3	993709607443
India	Coach Joel (950150519)	@RUDRASENAREDDY	Tier 3	01159282
India	Coach Joel (950150519)	@satwinder61256	Tier 3	9814993014
India	Coach Joel (950150519)	@ingbCDI	Tier 3	315163
India	Coach Joel (950150519)	@MRBABU1981	Tier 3	348228823863
India	Coach Joel (950150519)	@Raviram12	Tier 3	80741182
India	Coach Joel (950150519)	@Vinu444	Tier 3	29766187
India	Coach Joel (950150519)	@ERAVINDHAR	Tier 3	9391811333
India	Coach Joel (950150519)	@maheshwari1989	Tier 3	22606
India	Coach Joel (950150519)	@veeru6911	Tier 3	4741616
India	Coach Joel (950150519)	@Anil8074142374	Tier 3	84495437
India	Coach Joel (950150519)	@Sudha6669	Tier 3	77372406
India	Coach Joel (950150519)	@Prakash080890	Tier 3	0483971
India	Coach Joel (950150519)	@kishoredadanala	Tier 3	3254065
India	Coach Joel (950150519)	@Raghavendranai	Tier 3	092663
India	Coach Joel (950150519)	@Veeranki1221	Tier 3	855210116374
India	Coach Joel (950150519)	@satyammulaAmbassador	Tier 3	8715352
India	Coach Joel (950150519)	@mahaboobshak	Tier 3	34726731
India	Coach Joel (950150519)	@TallamallaVijayakumar	Tier 3	39702
India	Coach Joel (950150519)	@PLakshmi_InterlinkAmbassdor	Tier 3	934512
India	Coach Joel (950150519)	Chandu66@InterlinkLabs	Tier 3	23438733654
India	Coach Joel (950150519)	@KALISETTY75	Tier 3	9505976700
India	Coach Joel (950150519)	@AKRAO0312	Tier 3	64244
India	Coach Joel (950150519)	@K90522	Tier 3	385838661837
India	Coach Joel (950150519)	@pnbsingh	Tier 3	9491456282
India	Coach Joel (950150519)	@omnamo1922	Tier 3	8143645188
India	Coach Joel (950150519)	@Malathi9	Tier 3	9908884880
India	Coach Joel (950150519)	@Saddu234	Tier 3	922940455182
India	Coach Joel (950150519)	@oscarnethajee	Tier 3	679306664
India	Coach Joel (950150519)	@Sadiqali2004	Tier 3	67893470
India	Coach Joel (950150519)	@RAJENDERVARMA143	Tier 3	838222
India	Coach Joel (950150519)	@siva4434	Tier 3	4109058027
India	Coach Joel (950150519)	@GBK_2929	Tier 3	71403716207
India	Coach Joel (950150519)	@asrinivas82	Tier 3	33675114434
India	Coach Joel (950150519)	@Panjaharish	Tier 3	853976586315
India	Coach Joel (950150519)	@VanamVijayakumar	Tier 3	375431391
India	Coach Joel (950150519)	@SubbuSta	Tier 3	9083906271
India	Coach Joel (950150519)	@dillesh09	Tier 3	00430862
India	Coach Joel (950150519)	@kranthi35	Tier 3	1543903
India	Coach Joel (950150519)	@GurijalaRajuKhammam	Tier 3	9966614145
India	Coach Joel (950150519)	@Gunja_Siva	Tier 3	2251934
India	Coach Joel (950150519)	@akash112143	Tier 3	8008036694
India	Coach Joel (950150519)	@Sagar930066	Tier 3	930066
India	Coach Joel (950150519)	@yuganthakudu	Tier 3	9553771701
India	Coach Joel (950150519)	@Someshganta146	Tier 3	9347240146
India	Coach Joel (950150519)	@sivaxuv500	Tier 3	5832513
India	Coach Joel (950150519)	@Appleayan768	Tier 3	950600770580
India	Coach Joel (950150519)	@Kurapati01	Tier 3	591783
India	Coach Joel (950150519)	@Pagoud	Tier 3	284223721
India	Coach Joel (950150519)	@anilmanda204	Tier 3	50004263
India	Coach Joel (950150519)	@Srk9991	Tier 3	985095966155
India	Coach Joel (950150519)	@Shivareddy369	Tier 3	096341
India	Coach Joel (950150519)	@RANIRATNA	Tier 3	988554
India	Coach Joel (950150519)	@ramubollu	Tier 3	3782169
India	Coach Joel (950150519)	@Matla12345	Tier 3	9949875008
India	Coach Joel (950150519)	@dadithirupathi	Tier 3	166427303
India	Coach Joel (950150519)	@nanikanna	Tier 3	3885732229
India	Coach Joel (950150519)	@shakeel591sn	Tier 3	9959566809
India	Coach Joel (950150519)	@Ch_jrao	Tier 3	786687786687
India	Coach Joel (950150519)	@maheshbudigi	Tier 3	3644511578
India	Coach Joel (950150519)	@Saisamanvitha	Tier 3	7995659879
India	Coach Joel (950150519)	@jitenderinterlink	Tier 3	1572072
India	Coach Joel (950150519)	@Uzarafathima	Tier 3	262823926
India	Coach Joel (950150519)	@Munjalaraju	Tier 3	8106931438
India	Coach Joel (950150519)	@Nikhil_Sunny	Tier 3	734576542116
India	Coach Joel (950150519)	@Bhukyasushanth	Tier 3	546818315
India	Coach Joel (950150519)	@Saikumartippani	Tier 3	8121490946
India	Coach Joel (950150519)	@Ravikumar998566	Tier 3	117760
India	Coach Joel (950150519)	@Kasiviswandham	Tier 3	227574
India	Coach Joel (950150519)	@ramky754	Tier 3	7095627637
India	Coach Joel (950150519)	@NGonuguntla	Tier 3	9535600006
India	Coach Joel (950150519)	@khaja159	Tier 3	5396872
India	Coach Joel (950150519)	@Nvdasu	Tier 3	163625195058
India	Coach Joel (950150519)	@Pandu9776	Tier 3	9912349776
India	Coach Joel (950150519)	@ramky754	Tier 3	7095627637
India	Coach Joel (950150519)	@Devarajumannala	Tier 3	865075560
India	Coach Joel (950150519)	@Amarnathinterlink	Tier 3	1319009
India	Coach Joel (950150519)	@yogi9999	Tier 3	31736766
India	Coach Joel (950150519)	@durgaprasad2492	Tier 3	65178438
India	Coach Joel (950150519)	@Vankudothu	Tier 3	80312619597
India	Coach Joel (950150519)	@SureshDammigari	Tier 3	7799606586
India	Coach Joel (950150519)	@BandaruSaikumar	Tier 3	9133588244
India	Coach Joel (950150519)	@Yadlapalli77	Tier 3	34730230363
India	Coach Joel (950150519)	@Kattamohanrao	Tier 3	76162930801
India	Coach Joel (950150519)	@ThotaSatishKumar	Tier 3	8919089100
India	Coach Joel (950150519)	@Nareshkonga	Tier 3	990852
India	Coach Joel (950150519)	SureshkumarP Interlink Ambassador 	Tier 3	9490883025      
India	Coach Joel (950150519)	@ramanamma1234	Tier 3	70075738648
India	Coach Joel (950150519)	@Bapuji79	Tier 3	7396911230
India	Coach Joel (950150519)	@Skkyyyi	Tier 3	70308305
India	Coach Joel (950150519)	@thotayya143	Tier 3	8500792128
India	Coach Joel (950150519)	@InterlinkPoornima	Tier 3	227475
India	Coach Joel (950150519)	@Naveenmajjari	Tier 3	342240106483
India	Coach Joel (950150519)	@kurakulaSridhar	Tier 3	04341058056
India	Coach Joel (950150519)	@davidapollo2020	Tier 3	2066380
India	Coach Joel (950150519)	@NirmalaGurrala 	Tier 3	53608
India	Coach Joel (950150519)	@Kethavathprakash	Tier 3	9381715280
India	Coach Joel (950150519)	@Ramki74	Tier 3	8722731
India	Coach Joel (950150519)	@HASSANN005	Tier 3	9290198789
India	Coach Joel (950150519)	@Rajpuram	Tier 3	3367157218
India	Coach Joel (950150519)	@VankelaNaveen	Tier 3	9502608226
India	Coach Joel (950150519)	@daralinga	Tier 3	6124570
India	Coach Joel (950150519)	@ssreddyks	Tier 3	94938786
India	Coach Joel (950150519)	@Uppy1502	Tier 3	15021502
India	Coach Joel (950150519)	@Puttu78	Tier 3	8699384438
India	Coach Joel (950150519)	@shariff4807	Tier 3	7561461008
India	Coach Joel (950150519)	@chsk123	Tier 3	96789664
India	Coach Joel (950150519)	@Raja5150	Tier 3	8328457042
India	Coach Joel (950150519)	@Arelaxman	Tier 3	903057
India	Coach Joel (950150519)	@PKrushna83907701	Tier 3	83907701
India	Coach Joel (950150519)	@Rachakondarajesham	Tier 3	6341109235
India	Coach Joel (950150519)	@KALISETTY	Tier 3	7013775822
India	Coach Joel (950150519)	@SIVANAIK99	Tier 3	995925
India	Coach Joel (950150519)	@avreddyinterkink	Tier 3	151981940
India	Coach Joel (950150519)	@chvij	Tier 3	955322
India	Coach Joel (950150519)	@Rajencrypto	Tier 3	850009
India	Coach Joel (950150519)	@kranthi35	Tier 3	9000512161
India	Coach Joel (950150519)	@Naga4652	Tier 3	159438305161
India	Coach Joel (950150519)	@Surya P	Tier 3	9490883025
India	Coach Joel (950150519)	@jagannadham999	Tier 3	33830
India	Coach Joel (950150519)	@pittalavenkatesh	Tier 3	824761
India	Coach Joel (950150519)	@gurukasula	Tier 3	7013546
India	Coach Joel (950150519)	@Chinnaisu	Tier 3	3047881
India	Coach Joel (950150519)	@Bheemiredd	Tier 3	9949194942
India	Coach Joel (950150519)	@chsk123	Tier 3	96789664
India	Coach Joel (950150519)	@skilltechhari	Tier 3	897737386
India	Coach Joel (950150519)	@Kethavathprakash	Tier 3	9381715280
India	Coach Joel (950150519)	@Mohd2700	Tier 3	8985130182
India	Coach Joel (950150519)	@KiranPalaka	Tier 3	107522
India	Coach Joel (950150519)	@Ptirapati	Tier 3	888697
India	Coach Joel (950150519)	@mallesh4830	Tier 3	1487414
India	Coach Joel (950150519)	@earnmoneywithbbn	Tier 3	358583
India	Coach Joel (950150519)	@Gainichiranjeevi	Tier 3	256288
India	Coach Joel (950150519)	@INDHRAREDDY7368	Tier 3	9327499
India	Coach Joel (950150519)	@LakshmipatiT	Tier 3	77451432
India	Coach Joel (950150519)	@sreenu419	Tier 3	610967751
India	Coach Joel (950150519)	@NBSUMALATHA9999	Tier 3	8149886
India	Coach Joel (950150519)	@Gurram Sridhar	Tier 3	646126305
India	Coach Joel (950150519)	@mahipalreddy513	Tier 3	5057389
India	Coach Joel (950150519)	@vjs.sridevi	Tier 3	1754224654
India	Coach Joel (950150519)	@sumanth9900	Tier 3	4240
India	Coach Joel (950150519)	@C M VENKATARAMANAIAH	Tier 3	918328540446
India	Coach Joel (950150519)	@venkateswarlu99	Tier 3	8497120742
India	Coach Joel (950150519)	@bavani	Tier 3	489739390000
India	Coach Joel (950150519)	@Sriramoju93	Tier 3	989477
India	Coach Joel (950150519)	@badvelkhajapeer	Tier 3	81430
India	Coach Joel (950150519)	@YRK738	Tier 3	6032397
India	Coach Joel (950150519)	@svsshakunthala	Tier 3	9912052026
India	Coach Joel (950150519)	@yaseenabdl	Tier 3	131347
India	Coach Joel (950150519)	@daralinga	Tier 3	6124570
India	Coach Joel (950150519)	@prasadguttula	Tier 3	18031724873
India	Coach Joel (950150519)	@nagaraju46	Tier 3	8765040
India	Coach Joel (950150519)	@satyaveni0812	Tier 3	1488777
India	Coach Joel (950150519)	@Kiranbabu12	Tier 3	9642016
India	Coach Joel (950150519)	@Raju949498	Tier 3	94948410
India	Coach Joel (950150519)	@Svmudrakolla1	Tier 3	82430699376
India	Coach Joel (950150519)	@Chowdary chintha	Tier 3	9068159696
India	Coach Joel (950150519)	@Sbvraju	Tier 3	9431893
India	Coach Joel (950150519)	@Ymnaidu	Tier 3	98183037
India	Coach Joel (950150519)	@maliparvez	Tier 3	14840306
India	Coach Joel (950150519)	@LINGESWARA99	Tier 3	7208090774
India	Coach Joel (950150519)	@DaraAnjaiah123	Tier 3	1138563214
India	Coach Joel (950150519)	@svsveeranna	Tier 3	8919254659
India	Coach Joel (950150519)	@shariff4807	Tier 3	7561461008
India	Coach Joel (950150519)	@G_omsai	Tier 3	4646551
India	Coach Joel (950150519)	@ksh226699	Tier 3	154996
India	Coach Joel (950150519)	@LENINREDDYENUGU	Tier 3	170415141217
India	Coach Joel (950150519)	@Mdcsr6Md	Tier 3	949013
India	Coach Joel (950150519)	@Lvr600842	Tier 3	60000842
India	Coach Joel (950150519)	@mdsneha2	Tier 3	94901395
India	Coach Joel (950150519)	@Sasiikumar999	Tier 3	826278
India	Coach Joel (950150519)	@Srao86390	Tier 3	128370
India	Coach Joel (950150519)	@Penuganti Ramesh	Tier 3	9441089197
India	Coach Joel (950150519)	@AllaSandee75	Tier 3	424198
India	Coach Joel (950150519)	@Bhujanga999	Tier 3	95364631693
India	Coach Joel (950150519)	@Mankalaprashanthkumar	Tier 3	956220
India	Coach Joel (950150519)	@Soni9573	Tier 3	5310641
India	Coach Joel (950150519)	@yadagiri1221	Tier 3	1595355
India	Coach Joel (950150519)	@vislavathsurender	Tier 3	782229946
India	Coach Joel (950150519)	@Rajubanothu1432	Tier 3	9849213450
India	Coach Joel (950150519)	@MatthewMatt	Tier 3	9493326128
India	Coach Joel (950150519)	@Jami30111	Tier 3	827157
India	Coach Joel (950150519)	@arubkumarkachetti	Tier 3	270939486
India	Coach Joel (950150519)	@Anand2893	Tier 3	198813242
India	Coach Joel (950150519)	@dariyaskdv7	Tier 3	9603588050
India	Coach Joel (950150519)	@Crypto_pulse89	Tier 3	19041927
India	Coach Joel (950150519)	@Sam23kvn	Tier 3	23199223
India	Coach Joel (950150519)	@sanjaykumar2484	Tier 3	87468811462
India	Coach Joel (950150519)	@Suru9660	Tier 3	99041537422
India	Coach Joel (950150519)	@Ani_17k	Tier 3	86899
India	Coach Joel (950150519)	@Kranthi3352	Tier 3	94763413
India	Coach Joel (950150519)	@sachinbhatt	Tier 3	9555285880
India	Coach Joel (950150519)	@Aria_cw	Tier 3	976111
India	Coach Joel (950150519)	@Ramprasad_InterlinkAmbassador	Tier 3	9951228991
India	Coach Joel (950150519)	@Dr._Amit	Tier 3	802274313427
India	Coach Joel (950150519)	@S1230P	Tier 3	9425351339
India	Coach Joel (950150519)	@Dr._Amit	Tier 3	802274313427
India	Coach Joel (950150519)	@Vaitagvadi	Tier 3	8669009932
India	Coach Joel (950150519)	Vijay Gautam 	Tier 3	332438091
India	Coach Joel (950150519)	Ankit_InterlinkAmbassador	Tier 3	2880336
India	Coach Joel (950150519)	@shaikh wasim	Tier 3	7667109001
India	Coach Joel (950150519)	HarshaRana	Tier 3	256975
India	Coach Joel (950150519)	@its_JaideepSingh	Tier 3	87890125974
India	Coach Joel (950150519)	@taladaramesh	Tier 3	04810
India	Coach Joel (950150519)	Sanjay meshram interlink labs trainee 	Tier 3	4152652
India	Coach Joel (950150519)	@BurarShah	Tier 3	30515
India	Coach Joel (950150519)	@V9785	Tier 3	00555333
India	Coach Joel (950150519)	@Ani_17k	Tier 3	86889
India	Coach Joel (950150519)	@Kalpesh_Interlink_Ambassador	Tier 3	8767555697
India	Coach Joel (950150519)	@KUSRAMP	Tier 3	474715604
India	Coach Joel (950150519)	kandipeta	Tier 3	9966375
India	Coach Joel (950150519)	@AhSan_Azad_07	Tier 3	0261518159
India	Coach Joel (950150519)	@Anandk_2	Tier 3	1363127
India	Coach Joel (950150519)	@Masud2362025	Tier 3	2362025
India	Coach Joel (950150519)	@Asifmd4232	Tier 3	9704232970
India	Coach Joel (950150519)	@prashantharra	Tier 3	5087382927
India	Coach Joel (950150519)	@RajKumarWGL	Tier 3	9376512
India	Coach Joel (950150519)	@RAVI_ SAXENA 	Tier 3	798014
India	Coach Joel (950150519)	@roopweb3	Tier 3	240411060102
India	Coach Joel (950150519)	@Vs700works	Tier 3	9299993230
India	Coach Joel (950150519)	@Smartdevoloper888	Tier 3	8985644969
India	Coach Joel (950150519)	@sonGokuu0	Tier 3	6290390242
India	Coach Joel (950150519)	@vikky007	Tier 3	7987393950
India	Coach Joel (950150519)	@Yadlapalli77	Tier 3	34740230363
India	Coach Joel (950150519)	@GosuNagendram	Tier 3	383194344
India	Coach Joel (950150519)	@bapujishashi	Tier 3	684766
India	Coach Joel (950150519)	@sanampudi1963	Tier 3	0717462966
India	Coach Joel (950150519)	@gsvbt4	Tier 3	9774556
India	Coach Joel (950150519)	@forInterlink	Tier 3	995249913756
India	Coach Joel (950150519)	@sukasi24	Tier 3	9176648709
India	Coach Joel (950150519)	@Kishor_Alpiki	Tier 3	9642538803
India	Coach Joel (950150519)	Trivikram_V	Tier 3	2701026
India	Coach Joel (950150519)	@praveendamini	Tier 3	020619941990
India	Coach Joel (950150519)	@shivdans	Tier 3	1347139
India	Coach Joel (950150519)	@RameshNaidu_InterlinkAmbassador	Tier 3	7629883
India	Coach Joel (950150519)	@ramesh246256	Tier 3	4743948
India	Coach Joel (950150519)	@vishista2013	Tier 3	5054900106
India	Coach Joel (950150519)	@Mr_sultan_m7	Tier 3	839745
India	Coach Joel (950150519)	@Davidkamble1435	Tier 3	9381009073
India	Coach Joel (950150519)	@shivdans7	Tier 3	1347139
India	Coach Joel (950150519)	lakshmiak16	Tier 3	16030707
India	Coach Joel (950150519)	@Gayatridevibolla	Tier 3	632049
India	Coach Joel (950150519)	@MahiShimla91	Tier 3	1039381281
India	Coach Joel (950150519)	@ramanamma1234	Tier 3	70075738648
India	Coach Joel (950150519)	Kotha Raviteja 	Tier 3	05042440
Philippines	Coach Joel (950150519)	@Novax2298	Tier 2	2298
Philippines	Coach Joel (950150519)	@TJNakamoto	Tier 2	092190
Philippines	Coach Joel (950150519)	@MaLNakamoto_imterlinkambassador	Tier 3	4749364
Philippines	Coach Joel (950150519)	@LowkeyNakamoto	Tier 3	0612
Philippines	Coach Joel (950150519)	@fujienakamoto	Tier 3	002366
Philippines	Coach Joel (950150519)	@RhenNakamoto_InterlinkLabs	Tier 3	021598
Philippines	Coach Joel (950150519)	@BNakamoto_InterlinkAmbassador	Tier 3	85094
Philippines	Coach Joel (950150519)	@michpas23	Tier 3	274104
Philippines	Coach Joel (950150519)	@Margune	Tier 3	021490
Philippines	Coach Joel (950150519)	@RyleNakamoto_InterlinkAmbassador	Tier 3	91276872
Philippines	Coach Joel (950150519)	@JayrNakamoto	Tier 3	0442
Philippines	Coach Joel (950150519)	@mattb0	Tier 3	11301990
Philippines	Coach Joel (950150519)	@jNakamoto1993	Tier 3	222401
Philippines	Coach Joel (950150519)	@MarkNakamoto_InterlinkAmbassador	Tier 3	112893
Philippines	Coach Joel (950150519)	Jsnsb	Tier 3	73737
Türkiye	Coach Joel (950150519)	@yasinaltun16	Tier 1	199308
Türkiye	Coach Joel (950150519)	@maxwage	Tier 2	11484
Türkiye	Coach Joel (950150519)	@Lim10cubaba	Tier 2	1648521
Türkiye	Coach Joel (950150519)	@daisy61473	Tier 3	61473
Türkiye	Coach Joel (950150519)	@Hknrc	Tier 3	831385390
Türkiye	Coach Joel (950150519)	@Mehmetkrkc	Tier 3	799135788565
Türkiye	Coach Joel (950150519)	@necip6663	Tier 3	921733
Türkiye	Coach Joel (950150519)	@hsynyucl	Tier 3	5044651023
Türkiye	Coach Joel (950150519)	@serhangur34	Tier 3	3419071907
Türkiye	Coach Joel (950150519)	@massaka46	Tier 3	215618
Türkiye	Coach Joel (950150519)	@Muslera27	Tier 3	217895
Türkiye	Coach Joel (950150519)	@tosunalaattin	Tier 3	64033
Türkiye	Coach Joel (950150519)	@kocasamm	Tier 3	150986644248
China	Coach Joel (950150519)	@lxwasx	Tier 1	254414
China	Coach Joel (950150519)	@jidemengjianwo	Tier 2	993374792
China	Coach Joel (950150519)	@xkkkljj	Tier 2	792818554
China	Coach Joel (950150519)	@zq3309	Tier 2	3309
China	Coach Joel (950150519)	@xiataozhi	Tier 2	9132914
China	Coach Joel (950150519)	@Gaoshanglong	Tier 2	9132917
China	Coach Joel (950150519)	@InterLink1223	Tier 2	3282615395
China	Coach Joel (950150519)	@XRPDAO521	Tier 2	88521
China	Coach Joel (950150519)	@jiangnan_interlinkAmbassador	Tier 3	017985
China	Coach Joel (950150519)	@Pinetwork917	Tier 3	7885381
China	Coach Joel (950150519)	@yingxijie	Tier 3	19820314
China	Coach Joel (950150519)	@lixinmei888666	Tier 3	15551888
China	Coach Joel (950150519)	@NineOld	Tier 3	068701
China	Coach Joel (950150519)	@ly525452	Tier 3	08305766
China	Coach Joel (950150519)	@genniuge	Tier 3	78192
China	Coach Joel (950150519)	@Ws198811	Tier 3	4540510816
China	Coach Joel (950150519)	@InterLink_miao	Tier 3	676736
China	Coach Joel (950150519)	@qinmuo	Tier 3	50688749053
China	Coach Joel (950150519)	@acheng975	Tier 3	1997975
China	Coach Joel (950150519)	@Travis_interlinklabs	Tier 3	2301314
China	Coach Joel (950150519)	@InterJay	Tier 3	45475505
China	Coach Joel (950150519)	@interlink_duomi	Tier 3	676736
China	Coach Joel (950150519)	@Iian_miao	Tier 3	8258
China	Coach Joel (950150519)	@TT_DAO	Tier 3	000851
China	Coach Joel (950150519)	Ws198811 	Tier 3	4540410816
China	Coach Joel (950150519)	Yu	Tier 3	8815536
China	Coach Joel (950150519)	@kalac123	Tier 3	302014
China	Coach Joel (950150519)	@qw631350334	Tier 3	631350334
Ghana	Coach Joel (950150519)	@Pinyame	Tier 2	106060
Ghana	Coach Joel (950150519)	@Floppy90	Tier 3	22650
Camerron	Coach Joel (950150519)	@itzmoiiorif	Tier 3	0453503
Azerbaycan	Coach Joel (950150519)	@eynisceferi	Tier 3	155953
Africa	Coach Joel (950150519)	@samluvsyou_xoxo	Tier 3	202500180
Africa	Coach Joel (950150519)	@hedronian	Tier 3	080897
Malaysia	Coach Joel (950150519)	@Pokokungu	Tier 3	130894577
Malaysia	Coach Joel (950150519)	@BaskaranBV	Tier 3	756830
Iran	Coach Joel (950150519)	@h_mlkpr	Tier 3	200673
Vietnam	Coach Luke (23783)	@blogcuahai	Tier 1	764100
Vietnam	Coach Luke (23783)	@nguyenducbien89	Tier 1	9999888
Vietnam	Coach Luke (23783)	@Dungty2_	Tier 1	123458
Vietnam	Coach Luke (23783)	@Luan_KaLong	Tier 1	688699
Vietnam	Coach Luke (23783)	@kahtradervn	Tier 1	234566
Vietnam	Coach Luke (23783)	@luongquoctrinh	Tier 1	077177
Vietnam	Coach Luke (23783)	@nguyendongnghia2	Tier 2	195525
Vietnam	Coach Luke (23783)	@thienkhai1312	Tier 2	13121999
Vietnam	Coach Luke (23783)	@Thuong_Ambassador_921462	Tier 2	921462
Vietnam	Coach Luke (23783)	@amwork9	Tier 2	126899
Vietnam	Coach Luke (23783)	@hvn_hcm	Tier 2	905999
Vietnam	Coach Luke (23783)	@Tv629	Tier 2	5588629
Vietnam	Coach Luke (23783)	@Hogri2603	Tier 2	5849233
Vietnam	Coach Luke (23783)	@nghiem9x	Tier 2	22221111
Vietnam	Coach Luke (23783)	@nguyenvantrong0311	Tier 2	03112000
Vietnam	Coach Luke (23783)	@leduy4792	Tier 2	02091945
Vietnam	Coach Luke (23783)	@huynhtrunghieu97	Tier 2	300397
Vietnam	Coach Luke (23783)	@TienNhat1235	Tier 2	311096
Vietnam	Coach Luke (23783)	@ThienAnInterLink	Tier 2	456798
Vietnam	Coach Luke (23783)	@Interlink10112024	Tier 2	10112024
Vietnam	Coach Luke (23783)	@picuong	Tier 2	777709
Vietnam	Coach Luke (23783)	@hoanghai96z	Tier 2	270496
Vietnam	Coach Luke (23783)	@quangmmochannel	Tier 2	588501111
Vietnam	Coach Luke (23783)	@vinhpinet	Tier 2	38699999
Vietnam	Coach Luke (23783)	@Trungclip	Tier 2	111260
Vietnam	Coach Luke (23783)	@LeCan198791	Tier 2	198791
Vietnam	Coach Luke (23783)	@Thanhcongn79	Tier 2	975435279
Vietnam	Coach Luke (23783)	@Phamdong02051984	Tier 2	356700602725
Vietnam	Coach Luke (23783)	@huyhoangErez	Tier 3	240908
Vietnam	Coach Luke (23783)	@athony1707	Tier 3	084094001723
Vietnam	Coach Luke (23783)	@Khanhduongtan	Tier 3	051082
Vietnam	Coach Luke (23783)	@QuocViet92	Tier 3	333313
Vietnam	Coach Luke (23783)	@Thaonguyen2407	Tier 3	1336
Vietnam	Coach Luke (23783)	Lucky Trinh Ambassador of Interlink Labs	Tier 3	366883
Vietnam	Coach Luke (23783)	@Voskaaa	Tier 3	16992769
Vietnam	Coach Luke (23783)	@thanh284interlink	Tier 3	0938807994
Vietnam	Coach Luke (23783)	@thoacamap	Tier 3	888899996789
Vietnam	Coach Luke (23783)	@tuanmien8995	Tier 3	29012023
Vietnam	Coach Luke (23783)	@Lee_InterLink_Ambassador	Tier 3	88181
Vietnam	Coach Luke (23783)	@p_tang85	Tier 3	30585
Vietnam	Coach Luke (23783)	@Chuongduong2412	Tier 3	241298
Vietnam	Coach Luke (23783)	@daohuyhoc	Tier 3	23122013
Vietnam	Coach Luke (23783)	@InterlinkPb	Tier 3	248612
Vietnam	Coach Luke (23783)	@TRUONGNGUYENAI	Tier 2	134776
Vietnam	Coach Luke (23783)	@phamlinh7890	Tier 3	03031994
Vietnam	Coach Luke (23783)	@Trung_InterlinkLab	Tier 3	05041997
Vietnam	Coach Luke (23783)	@Huong_Ton	Tier 3	071074
Vietnam	Coach Luke (23783)	@lonvangdocngoc	Tier 3	0989769658
Vietnam	Coach Luke (23783)	@iluminati142	Tier 3	8780682243
Vietnam	Coach Luke (23783)	@khuongha77	Tier 3	02061626
Vietnam	Coach Luke (23783)	@InterLink19913	Tier 3	2942008
Vietnam	Coach Luke (23783)	@Lamhd1788	Tier 3	120519
Vietnam	Coach Luke (23783)	@nhuong87	Tier 3	181121
Vietnam	Coach Luke (23783)	@Hoangtrongtu199	Tier 3	4305552479
Vietnam	Coach Luke (23783)	@Phongbap98	Tier 3	18031999
Vietnam	Coach Luke (23783)	@Hoangphuc696947	Tier 3	887799
Vietnam	Coach Luke (23783)	@Iluminati142	Tier 3	8780682243
Vietnam	Coach Luke (23783)	@Thuaninterlink921921	Tier 3	921921
Vietnam	Coach Luke (23783)	@ID_Interlink_Network_82621272	Tier 3	82621272
Vietnam	Coach Luke (23783)	@BUIBAONHI	Tier 3	919293949
Vietnam	Coach Luke (23783)	@Anhnam0963509146	Tier 3	0963509146
Vietnam	Coach Luke (23783)	@Venle0101	Tier 3	2711200519
Vietnam	Coach Luke (23783)	@Pxdong35crypto	Tier 3	1986999
Vietnam	Coach Luke (23783)	@thuhangtq97	Tier 3	9376166
Vietnam	Coach Luke (23783)	@Dung_InterLink_Network	Tier 3	33049
Vietnam	Coach Luke (23783)	@Dat1371	Tier 3	237100
Vietnam	Coach Luke (23783)	@PLQH2305	Tier 3	233004
Vietnam	Coach Luke (23783)	@buimanhInterlink	Tier 3	889111
Vietnam	Coach Luke (23783)	@Itlgvanquyet	Tier 3	2717205
Vietnam	Coach Luke (23783)	@HoangHuynhHolder	Tier 3	0938866250
Vietnam	Coach Luke (23783)	@interlinknetworkdanang	Tier 3	0794848468
Vietnam	Coach Luke (23783)	@HaiVinhLong64	Tier 3	997599
Vietnam	Coach Luke (23783)	Van Phong 	Tier 3	45391438572
Vietnam	Coach Luke (23783)	@AnhTuan8669866	Tier 3	8669866
Vietnam	Coach Luke (23783)	@Buiduc7	Tier 3	611984
Vietnam	Coach Luke (23783)	@chianhtv	Tier 3	949444
Vietnam	Coach Luke (23783)	@hoangvankeo	Tier 3	19012005
Vietnam	Coach Luke (23783)	@Huyphong13	Tier 3	8866688
Vietnam	Coach Luke (23783)	@nguyenanipo	Tier 3	0989746249
Vietnam	Coach Luke (23783)	@RanInterlink	Tier 3	0784444680
Vietnam	Coach Luke (23783)	@THIENCA94	Tier 3	040444
Vietnam	Coach Luke (23783)	@Tranngohung	Tier 3	0799996379
Vietnam	Coach Luke (23783)	@trolody	Tier 3	011078
Vietnam	Coach Luke (23783)	@Vucuongly	Tier 3	0988994784
Vietnam	Coach Luke (23783)	@Myhanh281237	Tier 3	281237
Vietnam	Coach Luke (23783)	@nguyenhuuphuc27	Tier 3	95983328688
Vietnam	Coach Luke (23783)	Hồ Ngọc Hoá	Tier 3	090397
Vietnam	Coach Luke (23783)	@Chicong210490	Tier 3	0865988559
Vietnam	Coach Luke (23783)	@Longho1986	Tier 3	0938539555
Vietnam	Coach Luke (23783)	@chanbh	Tier 3	89123
Vietnam	Coach Luke (23783)	DaiLai8386	Tier 3	226668888
Vietnam	Coach Luke (23783)	@Kenbif3	Tier 3	0917397994
Vietnam	Coach Luke (23783)	@hvn2211	Tier 3	79808182
Vietnam	Coach Luke (23783)	@ThuyDung01	Tier 3	0966975711
Vietnam	Coach Luke (23783)	@Thanhtung36361992	Tier 3	36361992
Vietnam	Coach Luke (23783)	@linhnguyen179	Tier 3	168179
Vietnam	Coach Luke (23783)	@Toniphu	Tier 3	586687
Vietnam	Coach Luke (23783)	@Lanh_Thoa	Tier 3	90921921
Vietnam	Coach Luke (23783)	@hoainterlink	Tier 3	0963097114
Vietnam	Coach Luke (23783)	@Thanhtung1166	Tier 3	1166778899
Vietnam	Coach Luke (23783)	@Hoang_Bap	Tier 3	2810584
Vietnam	Coach Luke (23783)	@tungitlg	Tier 3	933955555
Vietnam	Coach Luke (23783)	@Chunghp1980	Tier 3	58211022
Vietnam	Coach Luke (23783)	@KHOAPHAN1955	Tier 3	19791984
Vietnam	Coach Luke (23783)	@Huyen_sbhk	Tier 3	30092024
Vietnam	Coach Luke (23783)	@ITLG6979	Tier 3	6979
Vietnam	Coach Luke (23783)	@minhha1979	Tier 3	7208993
Vietnam	Coach Luke (23783)	@rgs198x	Tier 3	134777
Vietnam	Coach Luke (23783)	@vinhdointerlik	Tier 3	463113
Vietnam	Coach Luke (23783)	@hunginterlink	Tier 3	6836683
Vietnam	Coach Luke (23783)	@sontayy	Tier 3	0586233333
Vietnam	Coach Luke (23783)	@banxubadao	Tier 3	34456
Vietnam	Coach Luke (23783)	@NGUYENANH707	Tier 3	674707
Vietnam	Coach Luke (23783)	@Theblue6688	Tier 3	88886688
Vietnam	Coach Luke (23783)	@ThienGiac	Tier 3	285466
Vietnam	Coach Luke (23783)	@BinhMinhITLG	Tier 3	618239997809
Vietnam	Coach Luke (23783)	@CLBTaiSanSo	Tier 3	0983403621
Vietnam	Coach Luke (23783)	@PhucKhangBaHuy	Tier 3	2704202
Vietnam	Coach Luke (23783)	@nxk8136	Tier 3	22166
Vietnam	Coach Luke (23783)	ngochoa0922	Tier 3	090397
Vietnam	Coach Luke (23783)	@Lanhle85	Tier 3	48186
Vietnam	Coach Luke (23783)	@Thanhtung36361992	Tier 3	36361992
USA	Coach Luke (23783)	@InterlinkCryptonacht	Tier 3	50634867726
Ethiopia	Coach Luke (23783)	@atsbaha12	Tier 1	2751
Ethiopia	Coach Luke (23783)	@Alwaysyitba	Tier 2	86150
Ethiopia	Coach Luke (23783)	@DagiD11	Tier 2	597613
Ethiopia	Coach Luke (23783)	@etetiyye12HT	Tier 2	571216
Ethiopia	Coach Luke (23783)	@YabseraTeklemariyam	Tier 2	19940527
Ethiopia	Coach Luke (23783)	@ETHO152338	Tier 2	393477
Ethiopia	Coach Luke (23783)	@Interlink109021	Tier 2	109021
Ethiopia	Coach Luke (23783)	@Interlink1161167	Tier 2	1161167
Ethiopia	Coach Luke (23783)	@daretubeNBO	Tier 2	8968068
Ethiopia	Coach Luke (23783)	@Sami_806	Tier 2	563828
Ethiopia	Coach Luke (23783)	@Embcsl	Tier 3	07048092
Ethiopia	Coach Luke (23783)	@Yasteseryal_19	Tier 3	08545652
Ethiopia	Coach Luke (23783)	@Mubaxma	Tier 3	486852
Ethiopia	Coach Luke (23783)	@meryem0922	Tier 3	61221
Ethiopia	Coach Luke (23783)	@hermon5x	Tier 3	185399797284
Ethiopia	Coach Luke (23783)	@Asemach21	Tier 3	122119
Ethiopia	Coach Luke (23783)	@Addistech01	Tier 3	0910853777
Ethiopia	Coach Luke (23783)	@davetsi23	Tier 3	547458965
Ethiopia	Coach Luke (23783)	@Ambassadorsuit	Tier 3	0887587
Ethiopia	Coach Luke (23783)	@Hepreton	Tier 3	42558586
Ethiopia	Coach Luke (23783)	@Minatozuma	Tier 3	099197
Ethiopia	Coach Luke (23783)	@Yonni_YT	Tier 3	22113322
Ethiopia	Coach Luke (23783)	@SeudShelby	Tier 3	290113
Ethiopia	Coach Luke (23783)	@hackersolo0	Tier 3	562569
Ethiopia	Coach Luke (23783)	@asflu7	Tier 3	271997180508
Ethiopia	Coach Luke (23783)	@tenaw48	Tier 3	494706
Ethiopia	Coach Luke (23783)	@Amu1o2	Tier 3	90139326
Ethiopia	Coach Luke (23783)	@Solla058	Tier 3	058011
Ethiopia	Coach Luke (23783)	@amanu5	Tier 3	123568971
Ethiopia	Coach Luke (23783)	@U5ername11	Tier 3	650606
Ethiopia	Coach Luke (23783)	@B3051K	Tier 3	823717
Ethiopia	Coach Luke (23783)	@muse_tsegaye	Tier 3	922953
Ethiopia	Coach Luke (23783)	@Natanim987	Tier 3	70689
Ethiopia	Coach Luke (23783)	@ase212112	Tier 3	78540273129
Ethiopia	Coach Luke (23783)	@ariclan	Tier 3	099686
Ethiopia	Coach Luke (23783)	@haset1619	Tier 3	191621
Ethiopia	Coach Luke (23783)	@daniboy07Ga	Tier 3	277540
Ethiopia	Coach Luke (23783)	@Mikideme	Tier 3	108962893
Ethiopia	Coach Luke (23783)	@tadie1826	Tier 3	285448
Ethiopia	Coach Luke (23783)	@mom_forever	Tier 3	007990
Ethiopia	Coach Luke (23783)	@leul_luh	Tier 3	92058139
Ethiopia	Coach Luke (23783)	@dujinik	Tier 3	9866284
Ethiopia	Coach Luke (23783)	@amu11_12	Tier 3	2259307
Ethiopia	Coach Luke (23783)	@InterlinkDes	Tier 3	428415167
Ethiopia	Coach Luke (23783)	@Torven_InterLink	Tier 3	53516731686
Ethiopia	Coach Luke (23783)	@Hussoz | Interlink Ambassador	Tier 3	586256
Ethiopia	Coach Luke (23783)	amu11_12	Tier 3	2870284
Ethiopia	Coach Luke (23783)	@tadie1826_InterlinkAmbassador	Tier 3	212854
Ethiopia	Coach Luke (23783)	@MyHacee_koo	Tier 3	488749398
Ethiopia	Coach Luke (23783)	@SalafiyyaaAhlussunnaa	Tier 3	949467231
Ethiopia	Coach Luke (23783)	@ase212121	Tier 3	78538359021
Ethiopia	Coach Luke (23783)	@BESHIIR	Tier 3	757537
Ethiopia	Coach Luke (23783)	@ahmedaman8939	Tier 3	3084077
Ethiopia	Coach Luke (23783)	@bigemcrypto	Tier 3	006386
Nigeria	Coach Luke (23783)	@OsamadigitalserviceLtd	Tier 2	34034737
Nigeria	Coach Luke (23783)	@Maidatacrypto	Tier 2	809336352805
Nigeria	Coach Luke (23783)	@Oredebby	Tier 2	1198007555
Nigeria	Coach Luke (23783)	@Investornaf	Tier 3	74264
Nigeria	Coach Luke (23783)	@Real_Defi_Doc	Tier 3	64896364
Nigeria	Coach Luke (23783)	@crypto_essential	Tier 3	6097549
Nigeria	Coach Luke (23783)	@Ox1crypto	Tier 3	751415784418
Nigeria	Coach Luke (23783)	@Onyiishape	Tier 3	893730
Nigeria	Coach Luke (23783)	@letthelordbwityaa	Tier 3	1244
Nigeria	Coach Luke (23783)	@Fabulouz_ntg	Tier 3	744244
Nigeria	Coach Luke (23783)	@Juateam	Tier 3	175640
Nigeria	Coach Luke (23783)	@Hilarynd	Tier 3	28092004
Nigeria	Coach Luke (23783)	@Smart030	Tier 3	3199167004
Nigeria	Coach Luke (23783)	@Raymondominique	Tier 3	249522
Nigeria	Coach Luke (23783)	@salihuna01	Tier 3	0049371
Nigeria	Coach Luke (23783)	@Jaysonjudge	Tier 3	46713859
Nigeria	Coach Luke (23783)	@Jarvis_89	Tier 3	590847236
Nigeria	Coach Luke (23783)	@Praizboj	Tier 3	4783483240
Nigeria	Coach Luke (23783)	@MudassirMD0	Tier 3	29198260
Nigeria	Coach Luke (23783)	@dia4gee	Tier 3	38436776
Nigeria	Coach Luke (23783)	@Ism7974	Tier 3	499612
Nigeria	Coach Luke (23783)	@sammycoded9	Tier 3	419705
Nigeria	Coach Luke (23783)	@T_TOSIN	Tier 3	30698
Nigeria	Coach Luke (23783)	@crypto_essential	Tier 3	6097549
Nigeria	Coach Luke (23783)	@oxjay44	Tier 3	2556119
Nigeria	Coach Luke (23783)	@AbbanErrphaan	Tier 3	6911921
Nigeria	Coach Luke (23783)	@demigod_tm	Tier 3	09060058761
Nigeria	Coach Luke (23783)	@Realwizi	Tier 3	08022801252
Nigeria	Coach Luke (23783)	@DAMI_123	Tier 3	49357726685
Nigeria	Coach Luke (23783)	@dremoweb3	Tier 3	8121865825
Nigeria	Coach Luke (23783)	@Adekoyepaul1	Tier 3	0900
Nigeria	Coach Luke (23783)	@Dopechef01	Tier 3	063674
Nigeria	Coach Luke (23783)	@Arianamarie0234	Tier 3	2558770
Nigeria	Coach Luke (23783)	@Legitupdates1000	Tier 3	290736264
Nigeria	Coach Luke (23783)	@emmycoolgarba	Tier 3	09034266550
Nigeria	Coach Luke (23783)	@Deen1st	Tier 3	291937
Nigeria	Coach Luke (23783)	@Isaiahaniedi	Tier 3	07085709877
Nigeria	Coach Luke (23783)	@Sol2reas	Tier 3	2638199608
Nigeria	Coach Luke (23783)	@Abosede55	Tier 3	52389
Nigeria	Coach Luke (23783)	@DAAFOM	Tier 3	08100706808
Nigeria	Coach Luke (23783)	@dc_vers3	Tier 3	9078033004
Nigeria	Coach Luke (23783)	@Giddy60	Tier 3	38263074
Nigeria	Coach Luke (23783)	@Johncaleb_1	Tier 3	523406
Nigeria	Coach Luke (23783)	@Nafusty	Tier 3	09011642048
Nigeria	Coach Luke (23783)	@superbiz1	Tier 3	35802865534
Nigeria	Coach Luke (23783)	@letthelordbwityaa_InterLink Ambassador	Tier 3	3084692
Nigeria	Coach Luke (23783)	@Alhamdu242	Tier 3	8038969524
Pakistan	Coach Luke (23783)	@Influencer123677	Tier 1	542995
Pakistan	Coach Luke (23783)	@AdeelAbbasbk	Tier 2	660066
Pakistan	Coach Luke (23783)	@digitalgoldusa	Tier 2	020494048
Pakistan	Coach Luke (23783)	@ZayanNabeel	Tier 3	78618
Pakistan	Coach Luke (23783)	@Malik000	Tier 3	4159
Pakistan	Coach Luke (23783)	@Mrzafuuuu	Tier 3	10457659773
Bangladesh	Coach Luke (23783)	@Foysall990	Tier 2	47588
Bangladesh	Coach Luke (23783)	@Ajkerkhelaairdropyt	Tier 2	556223
Bangladesh	Coach Luke (23783)	@Mdkhairul1	Tier 2	11255
Bangladesh	Coach Luke (23783)	@Shahadot100	Tier 2	165997
Bangladesh	Coach Luke (23783)	@KairoxSR	Tier 3	124425
Bangladesh	Coach Luke (23783)	@MD_SHOHAN_PARVAS	Tier 3	01971409250
Bangladesh	Coach Luke (23783)	@tbpyc	Tier 3	529685
Bangladesh	Coach Luke (23783)	@Sayed99990	Tier 3	31342
Bangladesh	Coach Luke (23783)	@Kenela2	Tier 3	455456
Bangladesh	Coach Luke (23783)	@trickbuzz_rasel	Tier 3	809823308
France	Coach Luke (23783)	@Theo2pii	Tier 2	675213
Korean	Coach Luke (23783)	@entia_0703	Tier 2	2848048
Japan Coach Joel (950150519)@SNakamoto_Interlinklabs T1 0833 - This user is The Owner of Bitcoin

Datebase 2
InterLink White Paper
Introducing
The InterLink Network is a decentralized infrastructure designed to support a global Human Network. Using face scanning and liveness detection, users verify their identity without exposing personal data, and become Human Nodes that help secure and maintain the integrity of the Human Network. Unlike traditional blockchains where wallets are anonymous and easily replicated, InterLink binds each identity to a real human — enabling sybil resistance, fair coordination, and trust-based applications across Web3.

We are building a human-centric blockchain network designed to make crypto accessible to everyone, with a mission to create the largest human network in the world — targeting 1 billion real people actively participating in the ecosystem and powering identity, governance, applications, and economic coordination across Web3.


InterLink Human Network
The InterLink Ecosystem is a modular, human-first architecture that connects identity, application, and blockchain infrastructure into one unified network.

At its core is the InterLink ID, a biometric-verified identity layer that ensures every user is a real, unique human. This ID powers the InterLink App, which acts as the primary user interface for accessing decentralized mini-apps in areas like Social, Gaming, AI Agents, and Finance — all published through the Mini-App Marketplace.

Developers build these apps using the InterLink MDK (Mini-App Development Kit), which provides essential modules such as authentication, notifications, onchain transactions, and payments. Apps are deployed and managed through the Developer Portal and interact with the network via the InterLink SDK.

Externally, other platforms can integrate InterLink’s identity verification through the Human Auth SDK, allowing trusted access to external applications.

All verified users become Human Nodes, contributing to network integrity and earning InterLink tokens. These tokens are issued and managed by the InterLink Chain, the decentralized blockchain that anchors identity, reputation, and economic coordination.

Last updated 5 months ago

InterLink Network
InterLink ID
A privacy-preserving proof of human solution that allows users to verify their uniqueness and humanness while maintaining anonymity.

InterLink ID leverages Proof of Personhood technology to verify that each holder is a unique individual. Designed to be person-bound, InterLink ID is exclusively linked to its owner, preventing transfers or misuse by fraudulent actors. This approach ensures a secure, reliable, and seamless digital identity verification experience. 
InterLink ID Introduction
InterLink ID is the identity layer powering the InterLink Network — a human-first blockchain ecosystem designed to bring real people into Web3.


Verifying human
As decentralized applications scale to millions of users, bots, fake accounts, and multi-wallet abuse continue to distort trust, rewards, and governance. InterLink ID is built to solve this by ensuring that every participant is a unique, verified human.


InterLink ID - Unlimited Access
InterLink ID grants users unified access to Mini-Apps and all integrated applications within the InterLink ecosystem.

Unlike traditional wallet-based systems, InterLink ID assigns a one-person-one-identity model across the network. This enables applications to:

Prevent Sybil attacks and bot farming

Ensure fairness in airdrops, governance, and staking

Build social trust and human reputation

Power real-world, compliant identity use cases

InterLink ID is at the heart of our mission to build the world’s largest human network on-chain — a system where people, not programs, define the future of Web3.
InterLink ID Generation Process
InterLink ID is created through a multi-step process that ensures each identity is backed by a real human and resistant to fraud or duplication:


InterLink ID Generation Process
1. Face Scan

The user captures a live facial image using their device’s camera as the starting point for identity creation.

2. AI Deepfake Checking

The system verifies liveness and authenticity using deepfake detection models, ensuring that the scan is not spoofed or synthetic.

3. Biometric Hashing

The validated facial data is converted into a unique biometric hash — a non-reversible representation that ensures uniqueness while preventing identity leakage.

4. Decentralized Storage

The biometric hash and associated metadata are stored securely using decentralized infrastructure, ensuring integrity and tamper-resistance.

5. InterLink ID Issuance

A permanent, unique InterLink ID is generated and bound to the human user. This ID can be used across dApps, governance systems, and Web3 ecosystems.
InterLink ID Credential
To enhance utility and real-world interoperability, InterLink ID supports the optional addition of verified credentials linked directly to each user’s identity.


Easily add a digital passport, bank card, or driver’s license.
These credentials include, but are not limited to:

Government-issued documents: Passport, National ID, Driver’s License

Financial credentials: Bank cards, credit cards, digital payment IDs

Proofs of status: Visa, residency, age, nationality, employment

All credentials are stored locally on the user’s device and never uploaded or accessible by InterLink or any third party. Through selective disclosure, users can prove facts such as:

“I am over 18”

“I have a valid bank account”

“I hold a passport from Country X”

“I am the rightful owner of this identity”

These verifications can be used to unlock mini-app access, participate in token-gated airdrops, or meet lightweight KYC requirements in decentralized environments — all without compromising personal privacy.

By bridging traditional identity and decentralized trust, InterLink transforms identity from a static concept into a modular, user-controlled access layer for Web3 and beyond.
Core Principles
Self-Sovereign Identity (SSI)
The InterLink ID architecture follows the principles of Self-Sovereign Identity (SSI) — empowering each user to be the sole owner and controller of their digital identity. In this model, credentials (such as age, nationality, or verification status) are issued by trusted entities or systems and are stored securely within the user’s InterLink ID.

These credentials are never held by a central server. Instead, they remain encrypted and under the user’s control, often stored locally or via decentralized infrastructure. When needed, users can generate verifiable proofs — such as zero-knowledge attestations — to present only the required information (e.g. “Over 18”) to any verifier, without revealing full personal data.

Core Components of InterLink ID’s SSI Model

InterLink ID's SSI Model
1. Issuer – Credential Provider
Entities that issue verifiable credentials to users. These credentials are digitally signed and can later be used to prove facts without revealing unnecessary personal information.

Examples:

Passport Department → Issues age, nationality, legal identity.

Crypto Wallet Platform → Issues wallet ownership or transaction activity.

Bank → Issues financial trust scores or fiat-KYC verification.

2. Holder – User & Identity Owner
The individual who receives and controls credentials. All credentials are encrypted and stored in the user’s InterLink ID wallet, not on any centralized server.

Key Abilities:

Store credentials securely.

Control who sees what.

Generate selective disclosures (e.g., “Over 18” without sharing birthdate).

Generate zero-knowledge proofs to prove facts without revealing raw data.

3. Verifier - Credential Consumer
Any system, service, or platform that requests and validates credential proofs from a holder to make access, compliance, or governance decisions.

Examples:

Decentralized Applications → Validate user uniqueness, reputation.

Payment Infrastructure → Require identity proof for fraud protection or regulatory compliance.

Web3 Services → Assess identity-based access for governance, lending, or airdrop participation.

Why This Matters
Traditional KYC systems store your data on central servers. InterLink ID flips that model:

You own your credentials.

You choose what to share, when, and with whom.

Your identity becomes portable across all of Web3 — with privacy intact.
Privacy & Security Architecture
Privacy & Security Architecture
At the core of InterLink ID lies a multi-layered privacy architecture, purpose-built to secure human identity while preserving decentralization and usability. This architecture brings together three critical pillars: encrypted biometric data, decentralized storage, and zero-knowledge proof readiness. Together, they form the technological backbone that ensures users retain full control over their identity, without compromising security or privacy.

Encrypted Biometric Data
InterLink ID begins with the biometric verification of real humans — a critical step in establishing Proof of Personhood. But unlike traditional identity systems, InterLink encrypts all biometric data at the moment of capture using end-to-end cryptographic methods. This ensures that:

No raw biometric information is ever stored or exposed.

Only the encrypted version of identity data exists, ensuring that even in worst-case scenarios (e.g. data breaches), user privacy remains protected.

The encrypted data can be referenced for verification without revealing the original input.

This approach enables both privacy and integrity — the system knows you’re real, but it doesn’t need to know who you are.

Decentralized Storage
To eliminate centralized points of failure, InterLink ID stores all identity-related data across decentralized storage layers. By integrating with decentralized file systems (e.g. IPFS or Arweave), the platform guarantees:

Tamper-resistance: no single entity can alter or delete user identity records.

High availability and fault tolerance.

User data remains sovereign and censorship-resistant.

This decentralized approach aligns with our self-sovereign identity model and ensures that InterLink ID operates without relying on any central server or third-party authority.

Zero-Knowledge Proof Readiness
As InterLink evolves, privacy technology must evolve with it. That’s why the system is designed to be fully zero-knowledge proof (ZK) compatible. ZK cryptography allows users to prove statements — such as their uniqueness or access rights — without disclosing the underlying data. In practice, this means:

Users can verify their personhood without exposing their biometrics.

Selective disclosure becomes possible (e.g., proving you are over 18 without revealing your birthdate).

Secure participation in on-chain voting, governance, and mini-app access without revealing wallet or identity details.

While full ZK integration may roll out progressively, the current infrastructure is ZK-ready by design. This future-proofs InterLink ID for a privacy-centric Web3.

Together, these three elements ensure that InterLink ID is not just a verification layer — but a trust layer, enabling the next generation of human-first decentralized applications.
Prevents Identity Spoofing & Fraud
To ensure secure authentication, advanced technologies such as the TrueDepth Camera System, Face Flashing, and Video-based Liveness Detection are employed. These solutions verify user authenticity in real time, effectively preventing identity spoofing and fraudulent access.


Deepfake Detection & Facial Recognition
1. TrueDepth Camera System
TrueDepth is an advanced camera system developed by Apple, primarily used for Face ID on iPhones and iPads. It combines infrared light and sophisticated software to create a 3D map of the user's face for secure authentication.

2. Face Flashing (Secure Liveness Detection Protocol)
Face Flashing is a secure liveness detection method that uses light reflections to ensure the person in front of the camera is real and not a static image or mask, enhancing security in facial recognition systems.

3. Video-based Liveness Detection
This technology analyzes subtle movements in live video to verify the authenticity of the user's face, preventing spoofing attempts through photos or pre-recorded videos.
NIST FRTE Evaluation
To ensure that InterLink ID meets the highest global standards for biometric performance, our core algorithm — interlinklabs_001 — was submitted to the U.S. National Institute of Standards and Technology (NIST) for evaluation under the FRTE (Face Recognition Technology Evaluation) program (see more). 

NIST is the world’s most recognized authority in biometric benchmarking. Their FRTE 1:1 Verification Track is considered the gold standard for evaluating face recognition systems in identity-matching scenarios. It is used by governments, banks, and enterprise security platforms worldwide to assess the accuracy, speed, and reliability of identity verification algorithms.

1. Performance is measured using two standard metrics

The charts compare InterLink’s biometric algorithm (interlinklabs_001) against leading alternatives across six real-world datasets.
False Match Rate (FMR):

Probability that two different individuals are incorrectly matched.

FMR
=
False Matches
Impostor Comparisons
FMR= 
Impostor Comparisons
False Matches
​
 
False Non-Match Rate (FNMR):

Probability that two images of the same person fail to match.

FNMR
=
False Non-Matches
Genuine Comparisons
FNMR= 
Genuine Comparisons
False Non-Matches
​
 
FNMR
=
False Non-Matches
Genuine Comparisons
FNMR= 
Genuine Comparisons
False Non-Matches
​
   the lower the values of both, the better. Ideal performance sits at the bottom-left corner of each graph.

2. FNMR vs. Elapsed Time for Mugshot Images Across Algorithms and Demographics

FNMR Stability Over Time (Ageing Effect)
This chart evaluates how biometric accuracy changes over time — specifically how False Non-Match Rate (FNMR) increases as the time gap between two face captures (photos) grows from 2 to 16 years.

The rightmost panel shows InterLink’s algorithm (interlinklabs_001), compared against other top-performing algorithms across different demographic groups:

 
B
F
B 
F
​
 : Black Female

B
M
B 
M
​
 : Black Male

W
F
W 
F
​
 : White Female

W
M
W 
M
​
 : White Male

🔎 Key Observations:
InterLink shows gradual and predictable increase in FNMR as faces age — no major spikes, indicating strong resilience to long-term facial changes.

Its curve is consistent across demographics, demonstrating fairness and robustness.

Compared to other algorithms (left panels), InterLink performs competitively — even with age gaps of 10–16 years.

This confirms InterLink’s suitability for long-term, one-time onboarding use cases such as decentralized identity, KYC, and Proof-of-Personhood.
3. Similarity Scores for Genuine and Impostor Image Pairs

Pair name
The figure shows similarity scores for 12 genuine and 8 impostor image pairs used in the May 2018 paper https://doi.org/10.1073/pnas.1721355115 Face recognition accuracy of forensic examiners, superrecognizers, and face recognition algorithms (Phillips et al.). The threshold (red horizontal line) is a value calibrated to give FMR = 0.0001 on mugshot images. Points above the threshold correspond to pairs determined to be genuine, and points below the threshold correspond to pairs determined to be impostors. If the determined class (genuine or impostor) matches the real class, points will be blue; if not, red. An X represents face detection failure in either of the images in the pair. Note that the sample size (n=20) is small, and the figure may change substantially if larger or different sets are used. The images can be viewed at 

🔎 Key Definitions:
Let 
S
(
x
1
,
x
2
)
S(x 
1
​
 ,x 
2
​
 ) be the similarity score between two facial images 
x
1
x 
1
​
  and 
x
2
x 
2
​
 .

The system applies a calibrated threshold T such that:
S
(
x
1
,
x
2
)
≥
T
⇒
Genuine Match
;
S
(
x
1
,
x
2
)
<
T
⇒
Impostor
S(x 
1
​
 ,x 
2
​
 )≥T⇒Genuine Match;S(x 
1
​
 ,x 
2
​
 )<T⇒Impostor 

The threshold T is tuned to ensure a False Match Rate (FMR) = 0.0001 on the NIST mugshot dataset.

https://www.pnas.org/doi/suppl/10.1073/pnas.1721355115/suppl_file/pnas.1721355115.sapp.pdf, where Gen 01 corresponds to Same-Identity Pair 1, Gen 02 corresponds to Same-Identity Pair 2, and so on.

4. False Negative Demographic Effects (Visa-Border Dataset)

This figure presents an analysis of False Non-Match Rates (FNMR) for InterLink’s biometric algorithm (interlinklabs_001) under varying demographic and quality conditions, using the Visa-Border dataset from NIST.

📐 Methodology:
The system is evaluated at an operating point of

FMR
=
0.00001
 with threshold 
T
=
177.01
FMR=0.00001 with threshold T=177.01
FNMR is computed by comparing low-quality border-crossing photos with high-quality enrollment images (e.g., visa application portraits), across 20+ countries of birth. Each group is segmented by gender and age bin (≤45 years vs. >45 years).

🔎 Interpretation:
Lower FNMR values indicate better matching accuracy.

Square dots represent empirical FNMR estimates;

Vertical bars represent 95% bootstrap confidence intervals.

Overlapping intervals suggest no statistically significant bias across age or gender.

For women, left, and men, the panels show false non-match rates when mediocre border cross photos are compared against high quality reference application portraits collected from individuals born in the country identified on the horizontal axis and aged either above or below 45 years of age at the time of the application photo. The square dots give the empirical FNMR point estimate. The vertical lines give bootstrap 95-percent confidence intervals around the point estimate. The intervals are wider when the country and age group is less-represented in this dataset. Overlapping intervals is an indication of no significant difference. Low FNMR values are synonymous with high accuracy.

5. Demographic Fairness Evaluation — False Match Rate (FMR)

To ensure equitable performance across diverse populations, we evaluate our face verification algorithm ( 
I
n
t
e
r
L
i
n
k
l
a
b
s
001
InterLinklabs 
001
​
 interlinklabs_001) using demographic-specific False Match Rates (FMR). This analysis is based on non-mate comparisons across four demographic groups — Black Female (FB), White Female (FW), Black Male (MB), and White Male (MW) — using the mugshot dataset provided by NIST FRTE.

🔎 Definition:
 
FMR
i
,
j
=
False Matches
(
i
,
j
)
Total Impostor Comparisons
(
i
,
j
)
 FMR 
i,j
​
 = 
Total Impostor Comparisons 
(i,j)
​
 
False Matches 
(i,j)
​
 
​
 
Where:

i = demographic group of the probe image

j = demographic group of the enrollment image

F
M
R
i
,
j
FMR 
i,j
​
  represents the probability of a false match between two individuals from demographic groups i and j

For non-mate comparisons of mugshots of black and white (B-W) males and females (M-F), the panels show false match rates for five algorithms: two for which on-diagonal demographic differentials are low, two for which they're high, and the target algorithm in this report. In the top row of panels the threshold is set for each algorithm to give FMR = 0.001 for white males which is the demographic that usually gives the lowest FMR. In the second row the white-male FMR = 0.0001. This means the top right box is the same color in all panels of a row.
InterLink App
An advanced platform designed to securely manage InterLink ID and enable seamless participation in the Human Network ecosystem.

The InterLink App is the primary gateway for users to access the InterLink ecosystem. It serves as the interface where users manage their InterLink ID, explore and use decentralized mini-apps, track token rewards, and participate in governance — all through a secure, human-first experience.


Users can actively contribute to AI model training by completing designated tasks and selecting partner organizations to work with. Their contributions generate valuable insights, for which they receive rewards. Additionally, the platform enables users to share computing power, allowing AI models to be trained directly on their devices without exposing raw data. This decentralized approach enhances security, preserves privacy, and ensures fair compensation for user participation. A resource-sharing dashboard provides transparency, enabling users to monitor and manage their contributions while supporting ecosystem growth.

InterLink ID enables seamless authentication, granting secure access to various applications with low-fee transactions. The platform also integrates mini-apps, a dynamic leaderboard, and social tasks to drive engagement. Users can earn daily rewards, securely manage digital assets with the built-in wallet, and stay updated with real-time crypto news.
InterLink App Introduction

InterLink App Introduction
Designed to securely manage InterLink ID, and participate in the Human Network ecosystem.

It empowers individuals to securely prove their real human identity with InterLink ID, manage digital assets, access a wide range of Mini-Apps, and participate in a vibrant, trust-based ecosystem — all within a single, seamless platform.
Mini-Apps in InterLink App
Mini-Apps inside the InterLink App unlock a new era of human-first digital experiences.

They are lightweight applications built to run seamlessly within the InterLink environment, powered by real human verification through InterLink ID.

Unlike traditional apps, Mini-Apps require no separate downloads or complex sign-ups. With just one verified InterLink ID, users can access a wide range of services — from social platforms and games to financial tools and marketplaces — directly within the app.


Mini-app Ecosystem
Users can experience full-featured apps without downloading, spanning across categories from AI, Gaming, and Finance to Social platforms.

Every Mini-App is designed to maximize trust, security, and efficiency by ensuring that only real, verified humans participate. Developers can easily build and launch their Mini-Apps using InterLink’s open SDKs, reaching a global network of authenticated users.

As the ecosystem expands, InterLink is poised to become the world’s largest decentralized Mini-App marketplace, rivaling traditional app stores and setting a new standard for human-first digital interaction.
Scan by InterLink App to Verify Human
InterLink App introduces a seamless, secure, and decentralized method to verify real human identity: Scan by InterLink.


Scan to Verify Human
With a single facial scan using the InterLink App, users can prove their unique human identity without compromising their privacy or personal data. Powered by advanced AI facial recognition and anchored through InterLink ID, the system ensures that each user is a verified, living human — not a bot, duplicate, or fake account.

How it Works:
One-Time Scan: Users perform a quick facial scan via the InterLink App. No biometric data is stored centrally; all verification is processed securely and privacy-preserved.

Real Human Verification: The scan confirms liveness, uniqueness, and authenticity, establishing a real human identity on the network.

Zero Hassle: No documents, no manual KYC steps, no repetitive verifications across apps.

Once verified, users unlock the full power of the InterLink ecosystem — from accessing Mini-Apps, earning rewards, engaging in social activities, to participating in AI-driven services — all without needing to re-verify for each application.

Scan by InterLink redefines trust for the digital era, making real human verification as simple as one scan — globally, instantly, and securely.
Human Node
In traditional blockchain ecosystems, mining typically involves solving complex mathematical puzzles using computational power.


Human-powered Mining
InterLink introduces a revolutionary alternative: Human Node Mining — where real human presence, verified through InterLink ID, becomes the foundation for securing and expanding the network.

Each verified user acts as a Human Node — a living, authentic participant of the decentralized ecosystem.

By simply being a real human and engaging with the InterLink network, users contribute value and are rewarded fairly without the need for expensive hardware, high energy consumption, or technical barriers.

Key Principles of Human Node Mining:
Proof of Personhood: Every participant must verify their uniqueness through a one-time InterLink ID scan, ensuring a network of genuine humans, not bots.

Zero Hardware Requirements: No mining rigs, no expensive equipment. Your real identity is your mining power.

Fair and Inclusive: Mining rewards are distributed based on human verification, activity, and contribution — not on financial or technical advantage.

Eco-Friendly and Scalable: Human Node Mining consumes minimal energy compared to traditional Proof-of-Work models, supporting sustainable global expansion.

How it Works:
Verify your humanity through InterLink App.

Stay active in the network by interacting with Mini-Apps, services, and social engagements.

Earn mining rewards (InterLink Tokens) proportional to your verified presence and participation.

Human Node Mining is more than just a new consensus model — it’s a vision for a decentralized network built by real people, for real people.
InterLink SDK
InterLink SDK is a development toolkit designed to facilitate seamless integration of identity verification, authentication, and AI-driven functionalities into applications with minimal coding effort. By providing a robust low-code solution, it enables developers to implement InterLink ID effortlessly, ensuring secure and frictionless authentication across diverse platforms, including iOS, Android, and web applications. With advanced encryption protocols, the SDK upholds stringent data security standards while offering extensive customization options, allowing developers to tailor integrations to meet specific application needs.

Engineered for scalability, InterLink SDK supports a broad spectrum of businesses, from agile startups to large enterprises, streamlining the development of AI-powered applications without compromising performance or security. Its modular architecture and secure APIs enable efficient functionality enhancement while maintaining operational integrity. To foster innovation and accelerate adoption, InterLink offers a 500M $ITL grant, empowering developers to create cutting-edge AI-driven applications and contribute to the expansion of the Human Network ecosystem.

Human Auth SDK
The Human Auth SDK by InterLink enables any application to integrate Single Sign-On (SSO) functionality, tied not to wallets or email addresses, but to verified human identity.


InterLink SDK
Unlike typical SSO systems tied to centralized identity providers (e.g., Google or Facebook), InterLink SSO uses on-chain, biometric-anchored identity, ensuring each login is performed by a unique, verified human.


Difference between InterLink SSO and centralized identity providers
Components

InterLink SDK (frontend): injected into web/mobile client

InterLink App (mobile): handles secure biometric confirmation

Verifier Node: decentralized endpoint (on-chain or light node) that verifies signed payloads

Credential Resolver (optional): fetches and validates user-bound credentials (e.g., passport, age proof)

Core Capabilities

Biometric-based login (liveness, uniqueness enforced)

JWT or ZK-style signed assertions of human = true, age > 18, or has_passport = true

InterChain identity binding — InterLink ID can be mapped to wallets across EVM, Solana, Cosmos, etc.

Offline-capable — signatures cached locally; used for dApps with intermittent connectivity

No PII transmission — biometric and credential data remain on-device, never exposed

Integration Highlights

Web2-ready: SDK available as JavaScript module, RESTful fallback

Web3-native: Pluggable with WalletConnect, Ethers.js, wagmi

Mobile-ready: React Native and Flutter bridges supported

Developer Options: Verify-only (read a Human)

Challenge flow (return signed payload for replay protection)

Credential gate logic (use cases: age, residency, document check)
Mini App Development Kit
The InterLink MDK (Mini-App Development Kit) is a comprehensive SDK suite that enables developers to rapidly build, deploy, and scale decentralized mini-applications on the InterLink Network.


Mini-App Development Kit
The MDK provides a full-stack toolkit with built-in modules for authentication, data handling, payments, and on-chain interaction — abstracting away blockchain complexity so developers can focus on application logic and user experience.

Get Started
1. App ID Registration:
Contact contact@interlinklabs.org to register and obtain your App ID.

2. Installation:
Install the UI Kit with NPM:
npm i @interlinklabs/mdk  

Import the Mdk SDK into your project from the corresponding file.

Install the UI Kit with NPM:
npm i @interlinklabs/mdk 

3. Using the SDK:

Copy
import React from "react";
import Mdk from "@interlinklabs/mdk";

const App = () => {
  const handleSuccess = () => {
    console.log("Login successful!");
  };

  const handleFailure = () => {
    console.log("Login failed.");
  };
  
  return (
    <Mdk
      appid="your-app-id"
      onSuccess={handleSuccess}
      onFailure={handleFailure}
    >
      {({ open }) => <button onClick={open}>Login with the app</button>}
    </Mdk>
  );
};

export default App;
Explore the full component library and usage examples on the Mini App Development Kit here.
InterLink Chain
Proof of Personhood
The InterLink Chain introduces Proof of Personhood (PoP), a groundbreaking consensus mechanism that secures the network by ensuring only verified human users can participate as validators. Unlike traditional models such as Proof of Work, which relies on computational power, or Proof of Stake, which depends on token ownership, PoP ties validation directly to real human identities through the InterLink ID—a decentralized identity system anchored in unique biometric data. By requiring validators to hold a verified InterLink ID, PoP effectively prevents Sybil attacks, where malicious actors attempt to dominate the network with multiple fake identities. This human-centric design not only enhances security but also aligns with InterLink’s mission to create a trustworthy, inclusive, and decentralized ecosystem.

At the heart of PoP lies the InterLink ID, which revolutionizes biometric authentication by eliminating the need for centralized storage of raw biometric data, a common vulnerability in traditional systems. Instead, it leverages zero-knowledge proofs (ZKP) and homomorphic encryption to transform biometric inputs—such as facial images or fingerprints—into encrypted, irreversible representations. This ensures that each user’s identity is unique while safeguarding privacy, as no sensitive data is stored or exposed. The process begins in the Enrollment Phase, where a biometric input 
B
B is converted into a feature vector 
F
=
f
(
B
)
∈
R
d
F=f(B)∈R 
d
  using advanced deep learning models like ResNet or Vision Transformers. To protect privacy, 
F
F undergoes secure transformations, including random projection 
F
′
=
T
F
F 
′
 =TF and Locality-Sensitive Hashing (LSH) to produce a binary hash 
H
(
F
′
)
=
(
h
1
,
h
2
,
…
,
h
m
)
H(F 
′
 )=(h 
1
​
 ,h 
2
​
 ,…,h 
m
​
 ), where 
h
i
=
sign
(
w
i
T
F
′
+
b
i
)
h 
i
​
 =sign(w 
i
T
​
 F 
′
 +b 
i
​
 ). This hash is then encrypted using a Pedersen commitment 
C
=
g
H
(
F
′
)
h
r
m
o
d
 
 
p
C=g 
H(F 
′
 )
 h 
r
 modp, which is stored in the Decentralized InterLink ZK Biometric Node Pool, ensuring decentralized and secure storage.


Privacy-Preserving Biometric Encryption
During the Authentication Phase, a user submits a new biometric input 
B
auth
B 
auth
​
 , which is processed into 
F
auth
′
F 
auth
′
​
 . The user generates a zero-knowledge proof to demonstrate that 
H
(
F
auth
′
)
H(F 
auth
′
​
 ) matches the stored commitment 
C
C without revealing the hash itself. The decentralized node pool collectively verifies this proof, ensuring secure and private authentication. AI enhancements, such as self-supervised learning (e.g., SimCLR), differential privacy, and GANs, further strengthen the system’s resilience against attacks and spoofing attempts.

PoP offers critical advantages in security, privacy, and compliance. Its multi-step encryption ensures irreversibility, while cancelability allows re-enrollment with a new transformation matrix if needed. Decentralization eliminates single points of failure, and the system aligns with regulations like GDPR and CCPA by minimizing data exposure and using ZKPs for verification. These features make PoP ideal for applications in finance, healthcare, and government services. Moreover, InterLink ID’s modular design—combining ZKPs with AI-driven biometrics—ensures adaptability to future threats, such as quantum computing, positioning it as a forward-thinking solution for digital identity verification.
Give humans top of block priority
The InterLink Chain is meticulously engineered to place verified human users at the apex of its operational hierarchy, ensuring that real individuals drive the network's activities. This human-first philosophy is operationalized through seamless integration with InterLink ID, a sophisticated identity verification system that serves as the bedrock for transaction prioritization. Unlike traditional blockchains where transactions are processed agnostically based on fees or arrival time, the InterLink Chain employs a novel block construction algorithm. Transactions originating from InterLink ID-verified users are systematically elevated to the "top of the block," guaranteeing expedited processing and inclusion in the blockchain ledger ahead of unverified or automated submissions.

This prioritization is not merely a technical tweak but a foundational principle that enables a range of innovative use cases. Smart contracts deployed on the InterLink Chain can directly interface with the InterLink ID system, querying or mandating proof of unique human identity as a prerequisite for execution. For instance, in decentralized governance protocols, this capability enforces a "one person, one vote" paradigm, thwarting attempts by malicious actors to amplify their influence through multiple accounts. Similarly, reward distribution mechanisms can leverage this feature to ensure equitable allocation, preventing bots or duplicate identities from siphoning incentives intended for genuine participants.

Central to this system is the robustness of the identity verification process, which hinges on advanced biometric technologies. The InterLink Chain incorporates NIST Facial Recognition Technology Evaluation (FRTE)-certified deepfake detection, employing cutting-edge facial recognition and liveness detection algorithms. These measures are designed to withstand sophisticated spoofing attempts, such as video replays or 3D-printed masks, ensuring that only authentic human users pass muster. This biometric rigor marginalizes bots and unverified entities, fostering a network environment that is inherently fair and trustworthy.

To implement this prioritization without compromising scalability, the InterLink Chain utilizes a decentralized network of verification nodes. These nodes operate in parallel to authenticate identities and flag transactions, preventing the verification process from becoming a bottleneck. Privacy is safeguarded through the use of zero-knowledge proofs, enabling users to confirm their humanity without exposing sensitive biometric data. While this approach introduces some complexity—such as the need to balance verification speed with security—it positions the InterLink Chain as a pioneer in creating a blockchain ecosystem that genuinely serves real people.
The foundation layer behind all InterLink Mini-Apps
The InterLink Chain stands as the architectural cornerstone of the InterLink ecosystem, providing a high-performance, scalable platform that underpins the development and deployment of decentralized applications (dApps), notably the InterLink Mini-Apps. Designed with developer accessibility in mind, the chain supports Ethereum Virtual Machine (EVM)-compatible smart contracts. This compatibility allows developers versed in Ethereum’s toolchain—such as Solidity and Truffle—to seamlessly transition to InterLink, accelerating the creation of innovative applications without requiring a steep learning curve.

Performance is a hallmark of the InterLink Chain, with a target throughput of 10,000 transactions per second (TPS) and a finality time of just 2 seconds. These metrics are achieved through a combination of an optimized consensus mechanism and a sharded network architecture, which distributes transaction processing across multiple nodes to maximize efficiency. Unlike many blockchains that struggle with congestion during peak usage, the InterLink Chain’s design ensures that users experience minimal latency, making it an ideal foundation for real-time, user-facing applications.

The InterLink Software Development Kit (SDK) amplifies this foundation by equipping developers with a rich suite of tools to craft InterLink Mini-Apps—lightweight, modular dApps tailored to leverage the chain’s unique attributes. A standout feature is the integration of verified human identity, courtesy of InterLink ID. This enables mini-apps to embed trust and authenticity into their core functionality. For example, a decentralized social platform could use identity verification to eliminate fake profiles, while a peer-to-peer marketplace could reduce fraud by ensuring all traders are verified humans. These capabilities unlock new paradigms of interaction that generic blockchains, lacking native identity layers, cannot replicate.

The mini-apps themselves are engineered for agility, supporting rapid deployment and iterative updates to meet evolving user demands. The chain’s high throughput and fast finality ensure that these applications scale effortlessly, even as adoption grows. By blending EVM compatibility, exceptional performance, and identity-driven innovation, the InterLink Chain establishes itself as the definitive platform for the next wave of human-centric decentralized applications.
Sybil Resistance
Sybil attacks—where a single entity floods a network with fictitious identities to subvert its operations—represent a persistent vulnerability in decentralized systems. The InterLink Chain confronts this threat with a multi-layered defense anchored in its requirement that all validators possess a verified InterLink ID. This mandate ensures that each validator is a distinct, real human, drastically raising the bar for attackers attempting to amass influence through fake identities.

The linchpin of this Sybil-resistant design is the Proof of Personhood (PoP) consensus mechanism, a groundbreaking departure from traditional models like Proof of Work or Proof of Stake. In PoP, the right to validate transactions and produce blocks is tied directly to verified human identity rather than computational resources or token holdings. This human-centric approach distributes network control equitably among real individuals, rendering it computationally and logistically infeasible for a single entity to dominate through identity proliferation.

The efficacy of PoP hinges on the InterLink ID verification process, which employs state-of-the-art biometric technologies. Featuring top-tier facial recognition and liveness detection—evaluated against NIST benchmarks—this system is engineered to detect and reject impersonation attempts, from deepfake videos to physical replicas. By embedding such rigorous checks into the validator onboarding process, the InterLink Chain ensures that only genuine humans can participate in consensus, safeguarding the network’s integrity.

To enhance resilience, the chain incorporates a dynamic reputation system for validators. Performance metrics and adherence to protocol rules are continuously tracked, with underperforming or malicious validators subject to penalties or expulsion. Privacy is preserved through zero-knowledge proofs, allowing validators to prove their identity without disclosing personal data. While no system is impervious—potential risks like biometric data breaches remain—the InterLink Chain mitigates these through decentralized verification nodes and ongoing algorithmic enhancements. This comprehensive strategy positions it as a bulwark against Sybil attacks, upholding trust and security at scale.
Aiming to be the world's most human blockchain network
The InterLink Chain transcends the conventional blockchain paradigm, aspiring to forge a Web3 ecosystem where human participation is the cornerstone. By anchoring every interaction to a verified InterLink ID, it tackles entrenched challenges that undermine decentralized networks: the proliferation of bots, the distortion of governance through Sybil attacks, and the exploitation of multi-wallet schemes. This human-centric ethos distinguishes it from generic blockchains, which often treat all actors—human or otherwise—as equal, inadvertently enabling abuse.

Bots and fake accounts erode trust in digital systems, from manipulating markets to flooding social platforms with spam. The InterLink Chain counters this by ensuring that only verified humans can engage meaningfully, relegating automated entities to the periphery. Similarly, multi-wallet abuse—where users hoard rewards or voting power through multiple identities—is nullified by linking privileges to a single, unique human ID. These solutions foster an equitable environment where resources and influence are distributed based on authentic participation.

The chain’s architecture is purpose-built for this vision, integrating secure, scalable, and privacy-preserving identity management into its core. This makes it an unparalleled foundation for applications demanding trust and fairness, such as decentralized finance platforms requiring KYC-like assurances, social networks free of impersonators, or governance systems immune to vote rigging. Unlike traditional blockchains retrofitted with add-on solutions, the InterLink Chain embeds these capabilities natively, offering a cohesive and efficient platform.

Growth is propelled by incentive structures, including mining rewards and referral bonuses, which encourage users to verify their identities and expand the network. This aligns individual participation with the collective ambition of creating the world’s largest on-chain human network. By empowering real people to shape a digital future rooted in authenticity and equity, the InterLink Chain redefines the role of blockchain technology, positioning itself as the vanguard of a more human Web3.
Human Node in the InterLink Chain
In the InterLink Chain, a Human Node is a verified human participant who serves as the backbone of the network’s decentralized operations. Authenticated via the innovative InterLink ID system, Human Nodes are tasked with validating transactions, shaping governance, and earning rewards, embodying a paradigm shift toward a truly human-centric blockchain. This design tackles pervasive issues in decentralized systems—such as bot-driven manipulation, Sybil attacks, and multi-wallet exploitation—by anchoring every critical action to a unique, verified human identity. The result is a robust, trustworthy framework that prioritizes authenticity and fairness in the Web3 landscape.

Core Functionality of Human Nodes
Human Nodes are the operational heartbeat of the InterLink Chain, driving both transaction validation and network governance with a bespoke consensus mechanism: Delegated Proof of Personhood (PoP). Unlike conventional proof-of-stake or proof-of-work systems, PoP integrates human verification into the validation process, ensuring that only real individuals can act as delegates. Each Human Node stakes InterLink Tokens to participate, with their eligibility further refined by a reputation score—a metric reflecting their historical reliability, participation frequency, and compliance with network protocols. Delegates are periodically elected based on a weighted combination of stake and reputation, creating a dynamic yet secure validator pool.

For transaction validation, Human Nodes process and confirm blocks using a streamlined protocol. Transactions are batched into blocks, which delegates verify for correctness (e.g., ensuring proper signatures and adherence to smart contract rules) before appending them to the chain. This process leverages a Byzantine Fault Tolerance (BFT)-inspired approach, where a supermajority of Human Nodes must agree to achieve consensus, ensuring resilience against malicious actors while maintaining efficiency.

Governance is equally human-driven. Human Nodes propose and vote on critical network decisions—ranging from protocol upgrades to resource allocation—via a transparent, on-chain voting system. Voting power scales with a node’s stake and reputation, but a cap on influence per node prevents centralization. Proposals require a quorum of participation and a threshold of approval, ensuring decisions reflect broad human consensus rather than the whims of a few.

Seamless Integration with InterLink ID
The InterLink ID system is the technological linchpin that distinguishes Human Nodes from traditional blockchain actors. It employs a multi-layered verification process to certify human uniqueness, combining biometric authentication (e.g., facial recognition or voice mapping) with behavioral attestation (e.g., analyzing interaction patterns over time). This data is processed through a privacy-preserving pipeline powered by zero-knowledge proofs (ZKPs) and secure multi-party computation (SMPC). ZKPs allow users to prove their humanity and uniqueness without disclosing raw biometric data, while SMPC distributes verification across trusted nodes to prevent any single point of failure or data exposure.

Once verified, a user’s InterLink ID is cryptographically bound to their on-chain identity, stored as a hash on the blockchain with sensitive details encrypted off-chain in a decentralized storage layer (e.g., IPFS with encryption). This setup ensures that Human Nodes can operate pseudonymously while the network retains confidence in their authenticity. Periodic re-verification—triggered by time intervals or flagged anomalies—maintains the system’s integrity without overburdening users, striking a balance between security and usability.

Incentives and Reward Mechanisms
The InterLink Chain encourages Human Node participation through a streamlined reward system designed to secure and expand the Web3 network. Rewards, distributed in InterLink Tokens, are earned via two key mechanisms:

Mining Rewards: Each individual can create a single Human Node and earn tokens by actively mining every 4 hours. This consistent participation is far more than a token-earning opportunity—it’s the backbone of the InterLink Network’s flawless operation. During each mining session, Human Nodes perform essential tasks such as validating transactions, ensuring their accuracy and legitimacy, and safeguarding the network against potential threats. This regular, distributed effort strengthens the network’s security by making it computationally challenging for malicious actors to disrupt operations. Moreover, the 4-hour mining cycle fosters continuous engagement, ensuring that the network remains active, resilient, and decentralized. As each node contributes its computational power or validation capacity, the collective effort of all Human Nodes creates a robust system capable of adapting to challenges while maintaining peak performance. The tokens earned are proportional to these efforts, aligning individual incentives with the network’s overall health.

Referral Incentives: Nodes can amplify their Human Hash Power by referring others to join the network. This two-tier system offers increased rewards: Level 1 rewards come from direct referrals, while Level 2 rewards are earned from the referrals of those in Level 1. More referrals lead to faster mining and greater token earnings, fostering network growth. Beyond individual benefits, this mechanism enhances the network’s operational integrity by driving exponential expansion. Each new node increases the total mining capacity, distributing the workload across a broader and more diverse participant base. This diversification bolsters decentralization, reducing the risk of centralized control and enhancing resilience. The referral system creates a virtuous cycle: as the network grows, it becomes more secure and efficient, rewarding those who contribute to its expansion while ensuring that the benefits of growth are shared across the ecosystem.

This incentivization model promotes active engagement and network expansion while ensuring that contributions directly benefit both the individual and the broader ecosystem. Mining rewards guarantee that the network is continuously maintained and secured by an active community of Human Nodes, while referral incentives fuel its growth and adaptability. Together, these mechanisms establish a self-regulating environment where every participant’s efforts—whether through mining or referrals—directly contribute to the InterLink Network’s perfect functioning. By aligning rewards with participation and network health, InterLink creates a sustainable Web3 ecosystem that thrives on collective effort, providing a secure and scalable foundation for the future.

Transformative Impact on the Web3 Ecosystem
The Human Node model redefines the Web3 paradigm by centering it around verified human agency, with far-reaching implications:

Eradicating Bot Influence: By restricting meaningful participation to Human Nodes, the chain eliminates bot-driven distortions in social platforms, gaming economies, and DeFi systems, ensuring interactions reflect real human intent.

Thwarting Sybil Attacks: The one-human, one-node rule, enforced by InterLink ID, renders identity spoofing impractical, safeguarding voting, reward distribution, and resource allocation.

Curbing Multi-Wallet Exploitation: Linking privileges to a single verified identity prevents users from gaming systems through multiple accounts, promoting equitable access to opportunities like airdrops or governance power.

Beyond security, this approach democratizes Web3 by empowering individuals over institutions or whales. It lays the groundwork for applications requiring high trust—think decentralized social networks free of spam, DAOs with genuine member-driven governance, or NFT marketplaces immune to artificial hype. The InterLink Chain thus emerges as a pioneer in building a Web3 ecosystem where authenticity is the currency of influence.

Robust Technical Architecture
The InterLink Chain’s architecture is engineered for scale, security, and human integration:

Identity Sharding: To manage millions of Human Nodes, the chain shards identity verification across parallel subnets. Each shard handles a subset of InterLink ID checks, reducing bottlenecks and enabling linear scalability.

Efficient Consensus: PoP optimizes for speed by limiting active validators to a rotating subset of high-reputation nodes, achieving sub-second transaction finality while preserving decentralization through frequent re-elections.

Privacy-First Design: ZKPs and off-chain encrypted storage ensure that identity data remains confidential, with on-chain hashes serving as tamper-proof references. This complies with privacy standards like GDPR while supporting trustless operations.

Load Balancing: A hybrid layer-2 solution offloads routine validations to sidechains, with Human Nodes anchoring final settlement on the main chain, enhancing throughput without compromising security.

This architecture not only supports current operations but anticipates future growth, positioning the InterLink Chain to onboard a global population of Human Nodes without sacrificing performance or integrity.


Human Node
InterLink Wallet
Redefining Wallets Through Verified Identity
InterLink Wallet is natively built within the InterLink App, enabling seamless integration with InterLink ID for verified digital identity. It is the first non-custodial wallet anchored to real human verification, providing users with a secure and decentralized way to manage their wallets and access decentralized applications (dApps).

Unlike traditional KYC methods, InterLink Wallet ensures user authenticity without requiring sensitive personal disclosures, striking a balance between privacy, decentralization, and trust. This innovation paves the way for a new class of Web3 applications where real human identity is verified on-chain—without compromising user sovereignty.


InterLink App
A Wallet Experience, Redefined
At InterLink, we place the highest priority on crafting a wallet experience that feels intuitive, secure, and beautifully simple. Every interaction — from managing assets to accessing decentralized applications — is designed with care and precision, so that anyone, anywhere, can navigate Web3 with confidence.

Whether you’re a first-time user or a seasoned builder, InterLink Wallet delivers the same level of polish and performance you’d expect from world-class technology — as seamless and satisfying as using an iPhone for the very first time. This is what a human-first wallet should feel like.


InterLink Wallet
Multi-chain by Design
InterLink Wallet is built with native multi-chain support, enabling users to seamlessly manage assets and interact with decentralized applications across major blockchain networks — all from a single interface. Whether it’s Ethereum, BNB Chain, Polygon, Solana, or Tron, InterLink Wallet ensures fast, secure, and intuitive access without requiring users to switch wallets or compromise on user experience. This multichain architecture is essential for empowering real humans to participate freely across the entire Web3 landscape.


Multi-chain Support
InterLink Wallet as a Gateway to Human-Verified dApps
The InterLink Wallet features a built-in Mini-App browser, giving users seamless access to a growing ecosystem of decentralized applications — all gated by real human identity. With just one InterLink ID, users can explore:

 • Games — PvP battles, prediction markets, on-chain leaderboards

 • Earn — Microtask platforms, bounty boards, play-to-earn apps

 • Commerce — Peer-to-peer marketplaces, social shops, digital goods

 • DeFi — Swap, bridge, and stake assets with Sybil-resistance

 • Education — Learn-to-earn platforms, AI training, skill-building apps

All apps are human-first, bot-free, and identity-aware — accessed through a single verified wallet experience.


InterLink Wallet as a Gateway to Human-Verified dApps
InterLink DAO
Decentralized by Design

InterLink DAO Proposals
InterLink is built on the principle that real humans — not institutions, algorithms, or centralized teams — should govern the future of the network. The DAO model allows InterLink to operate without a central authority, instead distributing decision-making power directly to verified users who hold $ITLG. This ensures that no single entity can dictate the direction of the ecosystem, and that every strategic decision is aligned with the values and needs of its real human participants.

Community-Driven Decision Making
At the core of InterLink DAO is the belief that community input is not optional — it is foundational. Whether it’s adjusting token supply, launching new features, expanding to new chains, or deploying incentive programs, all major initiatives are subject to DAO proposals and votes. This mechanism guarantees that those who contribute to and believe in the project have direct influence over its evolution.

Real Human Voting Power
Unlike other DAO models vulnerable to bot manipulation or plutocracy, InterLink’s governance is rooted in identity verification. Only human-verified $ITLG holders have the ability to vote, ensuring a fair, secure, and authentic decision-making process. This creates a more balanced system where governance is influenced not just by token quantity, but by the trust and legitimacy of real users.

Transparent and On-Chain Governance
Every proposal, vote, and execution within InterLink DAO is publicly verifiable and recorded on-chain. Governance processes are accessible to all, creating a transparent ecosystem where accountability is guaranteed by code, not promise. In the age of misinformation and shadow decision-making, InterLink DAO stands as a model of clarity, trust, and user sovereignty.
ITLX
ITLX Perpetual Exchange

ITLX is a fully decentralized perpetual exchange optimized for capital efficiency, deep liquidity, and omnichain access. Designed to rival centralized platforms in speed and performance, it empowers traders to execute high-leverage strategies across multiple chains with stable, USDC-based settlements. Built with transparency and composability at its core, ITLX offers a robust infrastructure for both retail and developers to trade or integrate seamlessly.


ITLX Perpetual Exchange
Key Features:

Permissionless Liquidity: Shared orderbook across chains enables unified, deep liquidity.

Perpetual Contracts: No expiration dates for maximum trading flexibility.

High Leverage: Up to 100x leverage for capital-efficient positions.

Omnichain Support: Trade on Solana, Ethereum, Polygon, Base, and more.

USDC-Based Settlement: All contracts are quoted, settled, and collateralized in USDC.

CEX-Like Execution: Minimal slippage, tight spreads, and fast transaction finality.

Dynamic Funding Rate: Balances long/short positions, anchored to spot price.

Developer SDKs: Easy-to-integrate tooling for custom trading applications.

Reliable Pricing: Off-chain oracles provide accurate, real-time market data.

Diverse Market Access: Over 120 supported pairs including BTC, ETH, and altcoins.

Advanced Ridsk Management: Cross-margin, limit/market orders, and liquidation protection.

Transparent & Secure: Decentralized architecture with capped deviation to prevent manipulation.

ITLX  Spot Exchange:
ITLX Spot Exchange enables fast, trustless token swaps across major blockchains with a seamless user experience. Built for real-time trading and optimized for performance, it aggregates liquidity from multiple sources to ensure users always receive competitive rates with minimal slippage.


ITLX Swap Exchange
Users can instantly swap between supported assets without order books, custodians, or intermediaries. Every trade is executed directly on-chain, guaranteeing transparency and full user custody at all times. Whether you’re bridging tokens between ecosystems or performing daily portfolio rebalancing, ITLX Spot Exchange is designed for speed, simplicity, and decentralization.

Core Features:

Instant Swaps: Execute token-for-token trades in seconds with no sign-ups or KYC.

Aggregated Liquidity: Access deep liquidity through multi-source routing for better pricing.

Cross-Chain Support: Swap assets across major networks like Ethereum, BNB Chain, Polygon, and more.

Non-Custodial: Maintain full control of your assets before, during, and after every trade.

Transparent & Trustless: All transactions are verified and settled on-chain.

ITLX Spot Exchange brings the simplicity of a DEX and the execution quality of an aggregator — all within the broader InterLink ecosystem.

ITLX Bridge
The ITLX Bridge enables fast, secure, and permissionless movement of assets across multiple blockchains — forming the backbone of InterLink’s omni-chain infrastructure. Designed for simplicity and reliability, it allows users to move tokens between ecosystems without intermediaries, unlocking true interoperability across Web3.

Whether you’re transferring tokens from Ethereum to Solana or bridging USDC from Polygon to Base, the ITLX Bridge handles complex cross-chain operations through a seamless interface and secure smart contract architecture.


ITLX Bridge
Core Features:

Cross-Chain Transfers: Move assets between major chains like Ethereum, Solana, BNB Chain, Polygon, and more — with full on-chain transparency.

Non-Custodial & Trust-Minimized: Assets are never held by third parties. Transfers are executed via secure, verifiable smart contracts.

Unified UX: A single intuitive interface for bridging across chains — no need to switch wallets or sign multiple transactions.

Optimized for Speed: Finality in minutes, not hours, with smart routing and parallel validation systems.

Ecosystem-Integrated: Fully native to the InterLink infrastructure, enabling seamless use of bridged assets across dApps, games, and DeFi modules.

With ITLX Bridge, InterLink becomes a truly interconnected Web3 environment — where liquidity and user experience flow freely across ecosystems.
Roadmap
InterLink Labs envisions a long-term future spanning decades, aiming to redefine how humans interact, verify, and build value in the digital age.
5-Year Roadmap
InterLink Labs envisions a long-term future spanning decades, aiming to redefine how humans interact, verify, and build value in the digital age.

🚀 5-Year Roadmap: Foundation for a Global Human Network.
Our project envisions a long-term roadmap spanning decades, but we are currently focused on delivering a clear and concrete 5-year plan.

This is the roadmap for our next five years:
2025 Milestones

Core Product:

Deliver all core products at the highest industry standards, ensuring scalable infrastructure capable of supporting tens of millions of users globally.

Core components include: InterLink ID, InterLink App, InterLink Chain, InterLink SDK, and InterLink Wallet, ITLX.

AI Model Training and Deployment:

Upgrade facial recognition models to meet the NIST (National Institute of Standards and Technology) highest benchmarks.

Deploy an AI facial recognition model ranked among the top 10 globally for accuracy.

Global User Acquisition:

Achieve 10 million fully verified real human users worldwide, establishing a strong network of decentralized identity holders.

InterLink Card Launch:

Roll out the InterLink Card to serve at least 3 million users globally, enabling real-world payments linked to verified identities.

InterLink Token Expansion:

Successfully list InterLink Token and InterLink Genesis Token on leading global centralized exchanges (CEXs), enhancing liquidity, accessibility, and ecosystem reach.

2026 Milestones

Core Product:

We are placing a stronger focus on AI development, particularly in optimizing AGI toward building personalized AI Agents for individuals. At the same time, we are proactively developing our own proprietary LLM (Large Language Model) architectures.

Ecosystem:

We are focused on building global developer communities while providing financial, marketing, and technical support — empowering developers to easily build dApps and Mini-Apps within the InterLink ecosystem.

Listing on U.S. Stock Exchange:
Completing the full audit procedures with leading Audit Firms and fulfilling all necessary regulatory requirements with the SEC to prepare for listing on a U.S. Stock Exchange.

InterLink Token Expansion:
Expanding the reach of the InterLink Token to tens of millions of users through AI-Funded UBI initiatives and broad adoption across 180 countries worldwide.

2027-2030+ Milestones

$ITLG for the 1.4 Billion Without Banks or IDs:
InterLink is engaging with leading global institutions to position $ITLG as a standardized payment method for distributing financial aid, micro-grants, and inclusive job rewards — especially in regions where traditional banking and identity systems fail.

User Acquisition:
Achieve the milestone of 1 billion fully verified real human users, establishing InterLink as the largest decentralized human network globally.

Ecosystem:
Become the network with the largest daily active usage of Mini-Apps, ranking just behind global app marketplaces such as Apple’s App Store and Google Play Store.

InterLink Token Expansion:
Position InterLink Token among the most widely held digital assets globally, and advance its adoption as an official reserve asset by select sovereign nations, enhancing its role in global financial systems.

Global Verification Infrastructure:

Complete the development of a universal verification infrastructure, replacing traditional methods such as KYC, CAPTCHA, and SMS OTP with over 100 billion verifications processed globally through InterLink’s decentralized network.
Roadmap
HumanPad Device
🌍 HumanPad: Enabling Real Human Verification for Everyone

We are building the foundational infrastructure for the Real Human Network, with the ambitious goal of verifying 1 billion real users worldwide. While our technology is designed to scale infinitely, a key challenge remains: in many parts of Africa and other underdeveloped regions, access to devices with high-quality cameras—required for biometric verification—is still limited.

To address this, we introduce HumanPad.


The Human Scan device makes scaling more efficient and seamless.
HumanPad is a compact, AI-powered device — roughly the size of an iPod Shuffle, but equipped with an AI-powered camera system and high-resolution sensors specifically optimized for human verification. These devices will be distributed globally, especially in underserved areas, to ensure that anyone, anywhere can verify their humanity and join the InterLink ecosystem.

Unlike typical mobile devices, the primary function of HumanPad is not to make calls or run everyday apps. Its sole focus is to verify real humans efficiently and securely. However, the full potential of this device may evolve as the network grows.

Beyond identity verification, HumanPad represents a gateway to financial inclusion. In many regions, over 1.3 billion people remain excluded from the formal financial system, simply because they lack formal identity documentation. HumanPad can serve as a trusted verification point for services such as:

Lending & Borrowing

Savings & Micropayments

Basic financial access

By anchoring digital identity in a decentralized, verifiable, and human-first model, HumanPad empowers populations previously left behind, unlocking access to Web3, finance, and opportunity on a global scale.


HumanPad works like an AI-powered wearable — smart, stylish, and human-first.
HumanPad is more than a human verification tool — it’s a minimalist, wearable AI device purpose-built for real people.

Designed with minimalism and functionality in mind, HumanPad runs on lightweight AI models to perform real-time verification, respond to user input, and act as an edge-level identity engine.

It functions as a personal AI device — powered by AGI (Artificial General Intelligence) — that learns from each user’s encrypted identity data stored via InterLink ID.
This enables more accurate, adaptive, and private interactions, tailored to each individual without exposing personal information or relying on cloud processing.

Vision: HumanPad — The Next Billion Global Device

We believe HumanPad will be the next billion-user breakthrough — a wearable AI device that becomes as culturally essential as the smartphone, AirPods, or Apple Watch.

In a world shifting toward ambient AI and personalized assistance, HumanPad is designed to be worn — not carried. It’s not just about technology, it’s about daily utility, emotional connection, and social identity. A product that feels natural to wear, yet powerful enough to carry your personal AI wherever you go.

This is not a gadget. It’s a global habit in the making — the first AI-native wearable built for real people, everywhere.
InterLink QR Payment
Real-World Payments with Crypto, Simplified

InterLink QR Payment bridges the gap between Web3 and the real world by allowing users to pay with crypto while merchants receive fiat — instantly and seamlessly. Whether using stablecoins like USDC or USDT, ETH, or other supported tokens, users can complete transactions in just a few taps.

At checkout, simply open the InterLink App, scan the merchant’s QR code, and confirm the payment. The transaction is processed on-chain in real time, and the recipient receives fiat currency directly — with no need to manage wallets, convert tokens, or deal with crypto volatility.

By combining the ease of mobile scanning with the power of decentralized finance, InterLink QR Payment makes crypto spending feel as natural as using Apple Pay or any banking app — while keeping full control in the hands of the user.
InterLink Card
The InterLink Card gives verified users real spending power — enabling payments, rewards, and cross-border financial utility, all backed by secure human verification via the InterLink Network

1. Fast, Simple, Verified Payments

InterLink Card
The InterLink Card is a VISA®/Mastercard®-powered prepaid debit card integrated with the InterLink App — designed to give users a simple, transparent, and cost-effective way to spend crypto seamlessly, anytime and anywhere.

With InterLink Card, users can make payments at millions of merchants worldwide using their stablecoin balance, while automatically earning $ITLG

What InterLink Card Offers:
No conversion fees or monthly/annual charges

Automatic yield generation on all balances held in the InterLink account

Instant spending capability at global online and offline merchants

Fully compatible with Apple Pay, Google Pay, and Alipay for a smooth checkout experience

2. Credential-Enabled

InterLink ID Credentials
Privacy-Preserving Identity Meets Real-World Payments

Each InterLink Card is linked not only to a wallet but also to the user’s verifiable credentials stored in their InterLink ID. These credentials may include:

NFC-enabled Passport

National ID

Driver’s License

KYC Level, Age, or Jurisdiction Tags

InterLink Card also enables users to connect valid forms of government-issued ID (e.g. NFC passports) to their InterLink ID — without exposing personal information to any third party.

At its simplest, a card equipped with NFC and connected to a verified InterLink ID can already serve as a secure and user-friendly payment method — replacing traditional plastic cards and passwords with tap-and-go access powered by identity.

But beyond ease of use, hese credentials are used to unlock or restrict payment permissions depending on context. For example:

Enable or restrict cross-border spending based on passport verification

Allow age-restricted purchases only if ID is linked

With face and passport verification qualifies as KYC/AML-ready for most payment use cases.

Future use: automate spending tiers, discounts, or access based on verified status

The result is a payment card that adapts to your real-world identity, while keeping your personal information private and under your control.

3. Revenue Potential
3.1. Explosive User Growth
Since launch, InterLink has demonstrated one of the fastest real-user onboarding rates in Web3 history:

400,000+ face-verified users within the first 30 days

Sustained growth rate of 10%–20% daily

Projected to reach 10 million verified users by year-end 2025

Community-driven mining and KYC incentives fueling adoption across Southeast Asia, LATAM, and Africa

Users can purchase InterLink Cards to unlock enhanced mining capabilities and maximize $ITLG rewards

3.2. Card Revenue Potential
The InterLink Card transforms identity into real-world financial utility — enabling verified users to transact, earn, and unlock benefits across borders. What makes this model powerful is user behavior: InterLink users are highly motivated to purchase the card and transact regularly in order to accelerate their $ITLG earnings — turning every payment into progress. This built-in incentive loop drives loyalty, daily activity, and sustainable revenue at scale.

A. Revenue from Transactions
Each cardholder generates consistent fee-based revenue through real-world payments:

Metric

Estimate (Conservative)

Cardholders (by end of 2025)

3,000,000

Avg. transactions per user/month

10

Avg. value per transaction

$10

Total monthly transaction volume

$300,000,000

Fee (~1.5%)

$4,500,000

Estimated annual revenue from transaction fees alone: $36M–$72M/year, with additional upside from premium user tiers, merchant partnerships, and tokenized incentives. Most of this revenue will be given back to the community.

B. Revenue from Card Sales
InterLink Cards are offered as both virtual and physical options, priced between $10 and $50 depending on tier and region. These cards unlock mining access, UBI rewards, and real-world spending capabilities.

Metric

Estimate (Conservative)

Expected card adoption (by end of 2025) (from 10M users)

3,000,000

Avg. card price

$30

Total revenue/ year

$90,000,000

Estimate revenue $65M–$120M+ annually, depending on adoption rates, card pricing tiers, and transaction activity.
Proof of Concept
Human Infrastructure for a Verified Internet
We are building the foundational infrastructure for the Real Human Network.

In the age of AI, today we have a problem with data for AI models. That’s why a large % of it is artificially generated to give models even more data.

But in that case, AI can generate too much low-quality information, just because it is trying to be like a human. Moreover, we (humans) use more & more AI-generated info on the internet. when new models are preparing, they start to use human data without understanding this data is from AI…

This isn’t just a technical issue — it’s a fundamental threat to the future of digital society.


That’s why we’re building the Human Layer — the core layer of the internet, where applications, Layer 1/2 chains, and platforms can build on top.

It anchors everything back to one critical truth: real humans matter. And they must be verifiable.

This long-term infrastructure includes:

 • Human Digital ID (face, orb, HumanPad etc.)

 • Mini App Ecosystem – a Decentralized App Store for verified humans

 • Wallet & Payment Infrastructure (Card, Qr)

 • Social Layer & SDKs

 • Super AGI (Artificial General Intelligence)
 Proof of Concept
InterLink ID: Proof of Personhood
Introduction to Proof of Personhood
Decentralized networks thrive on the principles of trust, fairness, and equal participation, yet they face persistent challenges in verifying the authenticity and uniqueness of their participants. Sybil attacks, where malicious actors create multiple fraudulent identities to gain disproportionate influence, threaten the integrity of these systems. Traditional consensus mechanisms like Proof of Work (PoW) and Proof of Stake (PoS) exacerbate this issue by tying influence to computational power or financial resources, often leading to centralization and marginalizing less-resourced participants. This misalignment with the democratic ethos of decentralization has spurred the need for a novel approach: Proof of Personhood (PoP).

PoP redefines network participation by anchoring it to the verification of unique human identities, ensuring that each participant has an equal voice regardless of external resources. This paradigm shift is critical for applications like decentralized governance, where equitable decision-making is paramount, and for economic models that aim to distribute rewards fairly across a community. InterLink ID’s implementation of PoP addresses the dual challenges of Sybil resistance and inclusivity, establishing a foundation for trust in decentralized ecosystems.

To formalize PoP, consider a network with a participant set 
I
I, where each 
i
∈
I
i∈I represents an entity seeking to participate. A credential verification function 
C
:
I
→
0
,
1
C:I→0,1 assigns 
C
(
i
)
=
1
C(i)=1 if 
i
i is authenticated as a unique human, and 
C
(
i
)
=
0
C(i)=0 otherwise. Uniqueness is enforced such that for any two participants 
i
j
,
i
k
∈
I
i 
j
​
 ,i 
k
​
 ∈I, if 
C
(
i
j
)
=
C
(
i
k
)
=
1
C(i 
j
​
 )=C(i 
k
​
 )=1, then 
i
j
≠
i
k
i 
j
​
 

=i 
k
​
 . Engagement is modeled via a participation function 
P
:
I
→
0
,
1
P:I→0,1, where 
P
(
i
)
=
1
P(i)=1 indicates active involvement (e.g., voting, staking, or contributing), and 
P
(
i
)
=
0
P(i)=0 denotes inactivity.

Voting power 
V
(
i
)
V(i) for participant 
i
i is then defined as:

V
(
i
)
=
C
(
i
)
⋅
P
(
i
)
∑
j
=
1
n
C
(
i
j
)
⋅
P
(
i
j
)
V(i)= 
∑ 
j=1
n
​
 C(i 
j
​
 )⋅P(i 
j
​
 )
C(i)⋅P(i)
​
 
This formula normalizes voting power across all verified, active participants, ensuring the total sums to 1 and reflecting a truly democratic allocation. The rationale behind this design is twofold: it prevents resource-based dominance (as seen in PoW/PoS) and incentivizes active participation, fostering a vibrant and engaged community. For example, in a network of 1,000 participants where 800 are verified and active, each would hold 
V
(
i
)
=
1
/
800
=
0.00125
V(i)=1/800=0.00125, an equal share that scales dynamically as participation changes.

Beyond governance, PoP has implications for identity-based applications, such as universal basic income (UBI) distribution in decentralized economies or access control in peer-to-peer systems. By tying influence to personhood rather than capital, InterLink ID aligns with the vision of a decentralized future where human agency, not wealth, drives collective outcomes.

Core Components of Proof of Personhood
The efficacy of PoP hinges on a robust framework of interdependent components, each addressing specific challenges in identity verification. InterLink ID’s approach integrates advanced technologies and thoughtful design to ensure security, usability, and resilience. Below, we explore these components in detail, including their theoretical underpinnings, practical implementations, and the trade-offs they navigate.

Deduplication
Uniqueness is the bedrock of PoP, as duplicate identities undermine trust and fairness. Traditional systems often rely on static identifiers (e.g., email addresses or government IDs), which are easily replicated or forged. InterLink ID employs biometric deduplication, leveraging the inherent uniqueness of human physiology—such as facial features or iris patterns—to ensure one credential per person. This is paired with decentralized identity protocols, distributing verification across a network to eliminate single points of failure.
Challenges and Trade-offs: Biometric systems must balance accuracy with inclusivity (e.g., accommodating diverse populations) and protect against spoofing (e.g., deep fakes). InterLink ID mitigates these risks with liveness detection and continuous model updates, ensuring robustness at scale.

Authentication
Credentials must be secure against unauthorized use, even if stolen or transferred. InterLink ID uses biometric authentication, requiring real-time verification (e.g., a facial scan) to unlock credentials. This “something you are” factor contrasts with weaker “something you know” (passwords) or “something you have” (keys) methods, offering superior security. For instance, a stolen wallet private key becomes useless without the owner’s biometric match.
Practical Example: In a decentralized voting scenario, a user authenticates via a facial scan on their device, ensuring only they can cast their vote, even if their device is compromised.
Trade-offs: Usability must be balanced with security; overly complex processes could deter adoption. InterLink ID streamlines this with user-friendly interfaces and rapid verification (<2 seconds).

Recovery
Credential loss—due to device failure, theft, or user error—requires secure, accessible recovery options. InterLink ID offers a multi-tiered recovery system:

User-Managed Backup: Encrypted credentials stored locally or in cloud backups, restorable with a secondary biometric check.

Social Recovery: A quorum of trusted contacts (e.g., 3 of 5) verifies the user’s identity to regenerate credentials, leveraging decentralized trust.

Issuer Re-Authentication: Users re-verify with the issuer using biometrics, akin to replacing a lost passport.

e-Issuance: New credentials invalidate old ones, deterring black-market trading.
Broader Implications: This flexibility enhances user autonomy while maintaining security, critical for adoption in regions with limited technical infrastructure.

Revocation
Compromised or maliciously issued credentials must be nullified without disrupting the system. In InterLink ID’s decentralized model, revocation is granular—only affected credentials are voided, preserving overall trust. For example, if a rogue issuer is detected, only their credentials are revoked via a consensus mechanism.
Technical Detail: Revocation lists are maintained on-chain, with zero-knowledge proofs ensuring privacy during status checks.
Trade-offs: Frequent revocations could burden the network; InterLink ID optimizes this with efficient indexing and periodic audits.

Expiry
Credentials must evolve with security threats, such as advances in quantum computing or biometric spoofing. InterLink ID introduces optional expiry dates, prompting periodic re-verification (e.g., every 5 years). This mirrors real-world IDs and ensures long-term resilience.
Future-Proofing: Expiry enables integration of next-generation cryptographic methods, maintaining PoP’s edge against emerging risks.

These components collectively form a holistic PoP system, addressing the spectrum of identity challenges from creation to retirement. InterLink ID’s emphasis on user control and decentralized trust distinguishes it from centralized predecessors, aligning with Web3’s ethos.

Solving Proof of Personhood at Scale
Scaling PoP to a global level demands a system that is inclusive, secure, and efficient across billions of users. Existing identity solutions—government IDs, social media accounts, or KYC processes—fall short due to exclusion, fraud vulnerability, or centralization. InterLink ID’s PoP framework meets these stringent requirements:

Inclusivity and Scalability: Over 1 billion people lack formal identification, per World Bank estimates. Biometrics transcend this barrier, requiring only a smartphone camera—already ubiquitous with 6.8 billion users worldwide (2023 data). InterLink ID’s cloud-based verification scales linearly with user growth, leveraging distributed nodes for global coverage.
Example: A farmer in rural Kenya, without a passport, verifies their identity via a facial scan, joining a decentralized cooperative.

Fraud Resistance: Sybil attacks thrive on cheap identity creation. Biometrics, combined with liveness detection and ZKPs, raise the cost of fraud exponentially—forging a face is far harder than spoofing an email.
Technical Insight: Deduplication compares biometric hashes across the network, flagging duplicates in real time.

Personbound Credentials: Transferring biometric-tied credentials is futile without the owner’s physical presence, deterring theft. Recovery mechanisms further ensure only legitimate owners regain access.
Use Case: In a P2P lending platform, lenders trust borrowers’ verified identities, reducing default risks.

Decentralization: Centralized systems risk censorship and breaches (e.g., Equifax 2017). InterLink ID’s blockchain-based architecture distributes issuance and verification, with no single entity controlling the network.
Resilience: A node failure in Asia doesn’t affect Europe, ensuring uptime.

Privacy: Zero-Knowledge Proofs (ZKPs) enable verification without data exposure, aligning with GDPR and CCPA. Users prove uniqueness without revealing biometrics, retaining sovereignty over their data.
Regulatory Advantage: Privacy-by-design enhances market acceptance in privacy-sensitive regions.

InterLink ID’s biometric-driven, decentralized approach overcomes the limitations of prior systems, offering a scalable identity layer for Web3 applications—from DAOs to tokenized economies.

Evaluating Verification Mechanisms
The choice of verification method shapes PoP’s effectiveness. InterLink ID evaluates alternatives against criteria like security, inclusivity, and privacy:

Online Accounts: Email or social media logins are trivial to multiply (e.g., bot farms) and exclude offline populations.
Weakness: No inherent uniqueness; 1 user can control 1,000 accounts.

Official ID Verification (KYC): Robust for those with IDs but excludes 50%+ of the global population without digital records. Privacy risks abound as users share sensitive data with third parties.
Limitation: Fake IDs and centralized storage invite fraud and breaches.

Web of Trust: Peers vouching for each other builds community trust but scales poorly and succumbs to deep fakes or collusion.
Risk: A Sybil attacker could infiltrate trust circles.

Social Graph Analysis: Mapping relationships to infer uniqueness is slow, AI-vulnerable (e.g., fake profiles), and excludes isolated individuals.
Drawback: Bias toward socially connected users.

Biometrics: Facial scans offer near-universal access, high accuracy (99.9% with modern models), and privacy via ZKPs. InterLink ID’s choice reflects its strengths: stability, forgery resistance, and scalability.
Advantage: A 2022 study showed facial recognition outperforms other biometrics in diverse settings.

InterLink ID’s biometric-ZKP hybrid outperforms alternatives by balancing security with inclusivity, making it ideal for global PoP deployment.

InterLink ID’s Verification Process

Figure 1: Proof of Personhood Verification Flow
InterLink ID’s verification integrates cutting-edge technologies for a seamless, secure user experience:

Biometric Verification
Facial scans, processed via deep learning (e.g., ResNet-50), generate feature vectors 
F
∈
R
512
F∈R 
512
 . Liveness detection (e.g., eye blinks) prevents spoofing.
Scalability: Cloud-based inference handles millions of verifications daily.

Decentralized Identity Protocols
Credentials are minted as NFTs on a blockchain, with smart contracts managing issuance and revocation. Users control private keys, ensuring sovereignty.
Security: Tamper-proof ledgers log all actions anonymously.

Zero-Knowledge Proofs
ZKPs (e.g., zk-SNARKs) prove biometric matches without revealing data. A user’s hash 
H
(
F
)
H(F) is committed on-chain, verified via: 
π
=
Prove
(
H
(
F
)
,
C
)
π=Prove(H(F),C) where 
π
π is the proof and 
C
C is the commitment.
Privacy: Nodes verify without seeing 
H
(
F
)
H(F).

This process, detailed in Figure 1: Proof of Personhood Verification Flow, ensures trust and efficiency across use cases like voting or payments.

Backup Mechanism for Intermediate Nodes
In decentralized systems, resilience against failures or attacks is paramount. Intermediate nodes in InterLink ID store encrypted biometric embeddings and serve as a critical layer between clients and the aggregator in the federated learning process. A robust backup mechanism ensures system continuity, data integrity, and security, making it a cornerstone of the system's reliability.

Importance of Backup Mechanisms
The backup mechanism addresses several critical needs:

Fault Tolerance: Node failures due to hardware issues, power outages, or network disruptions are inevitable in a global system. Backups ensure uninterrupted operation.

Data Integrity: Encrypted biometric embeddings must remain consistent and uncorrupted, as any loss or alteration could compromise deduplication or authentication accuracy.

Security: Targeted attacks, such as Distributed Denial of Service (DDoS) or ransomware, could disable nodes. A backup system mitigates these risks by distributing and safeguarding data.

Scalability: As the network grows to millions or billions of users, the backup mechanism ensures that increased load or node failures do not degrade performance.

Without such a mechanism, the system risks single points of failure, undermining the decentralized promise of resilience and trust.

Technical Implementation
InterLink ID’s backup mechanism is a sophisticated, multi-layered system designed for robustness and efficiency:

Redundant Storage with Erasure Coding: Biometric embeddings are encrypted and split into fragments using erasure coding (e.g., Reed-Solomon codes). These fragments are distributed across multiple nodes such that the original data can be reconstructed from a subset (e.g., 6 of 10 fragments). This approach optimizes storage while ensuring availability even if some nodes are offline.

Real-Time Monitoring and Health Checks: A decentralized monitoring network uses heartbeat signals and anomaly detection (e.g., based on LSTM models) to assess node health. Metrics like latency, uptime, and security events are tracked, with alerts triggered for anomalies such as sudden traffic spikes or unauthorized access attempts.

Automatic Failover with Consensus: Upon detecting a node failure or breach, a Byzantine Fault Tolerant (BFT) consensus mechanism among healthy nodes activates backup nodes. The failover process, completed in under 100 milliseconds, reassigns tasks and data access seamlessly, maintaining system continuity.

Data Integrity and Versioning: Each embedding is tagged with a cryptographic hash (e.g., SHA-256) and a version number. Periodic integrity checks compare stored hashes against originals, while versioning ensures that updates (e.g., from model retraining) are synchronized across backups without conflicts.

Geographic Distribution: Nodes are strategically placed across regions (e.g., North America, Asia, Europe) to reduce latency and enhance resilience against regional outages or censorship. A content delivery network (CDN)-like structure optimizes data retrieval from the nearest available backup.

Practical Example
Imagine a scenario in Southeast Asia where a typhoon causes power outages, disabling 20% of intermediate nodes. The monitoring system detects the failures within seconds, and the BFT consensus activates backup nodes in unaffected regions (e.g., Japan and Australia). Erasure-coded fragments are reassembled from surviving nodes, ensuring that biometric verification requests from users continue without interruption. Post-recovery, the system rebalances data distribution as nodes come back online, demonstrating adaptability and resilience.

Broader Implications
This backup mechanism not only ensures operational continuity but also builds user trust by demonstrating that their identity data remains secure and accessible under adverse conditions. It supports use cases like disaster response, where decentralized identity verification could enable rapid aid distribution, or global elections, where uptime is non-negotiable. By integrating redundancy, monitoring, and failover, InterLink ID sets a benchmark for reliable decentralized systems.

Figure 2: Backup Architecture for Intermediate Nodes illustrates this fault-tolerant design, showing the interplay of redundant storage, monitoring, and failover across a distributed node network.

Privacy-Preserving Biometric Encryption
Traditional biometric systems store raw data centrally, exposing users to privacy breaches and identity theft. InterLink ID’s privacy-preserving biometric encryption transforms biometric features into secure, irreversible representations, ensuring that sensitive data is neither exposed nor stored in a vulnerable state. This approach is integral to maintaining user sovereignty and trust in a decentralized identity system.

How Privacy-Preserving Biometric Encryption Works
The encryption process combines advanced cryptography and AI techniques for maximum security and privacy:

Feature Extraction
A facial scan is processed using a convolutional neural network (e.g., ResNet-50 or Vision Transformers) to extract a 512-dimensional feature vector ( F \in \mathbb{R}^{512} ). This vector captures unique biometric traits (e.g., distances between facial landmarks) while discarding extraneous details like lighting or background.

Secure Transformation
The feature vector is transformed to prevent reverse-engineering:

Biometric Salting: A user-specific random salt is applied via a non-linear function (e.g., a keyed hash), decorrelating the vector’s components. This ensures that even identical biometric inputs (e.g., from twins) produce distinct outputs.

Locality-Sensitive Hashing (LSH): The salted vector is mapped to a binary hash using LSH, preserving similarity for matching (e.g., Hamming distance < threshold) while obfuscating exact values. This hash is typically 256 bits, balancing compactness with security.

Zero-Knowledge Encryption
The binary hash is encrypted into a commitment using a ZKP scheme like Pedersen commitments: 
C
=
g
H
(
F
)
⋅
h
r
C=g 
H(F)
 ⋅h 
r
 , where 
g
g and 
h
h are generators, 
H
(
F
)
H(F) is the hash, and 
r
r is a random nonce. This commitment is stored on-chain, allowing verification without revealing 
H
(
F
)
H(F). During authentication, users generate a proof 
π
π using zk-SNARKs to demonstrate that their biometric matches the commitment.

Decentralized Storage and Verification
Commitments are distributed across intermediate nodes using a sharding protocol. Verification occurs via a distributed ledger, where nodes collectively validate proofs without accessing the underlying data. This eliminates central honeypots and reduces breach risks.

AI-Powered Enhancements
The system leverages AI to bolster security and adaptability:

Self-Supervised Learning (SSL): Trains feature extractors on unlabeled data, improving robustness across diverse populations (e.g., varying skin tones or ages).

Differential Privacy (DP): Adds calibrated noise to feature vectors before hashing, ensuring that statistical analysis cannot reconstruct individual inputs.

Generative Adversarial Networks (GANs): Simulates spoofing attempts (e.g., 3D masks) to train liveness detection, achieving a false acceptance rate below 0.01%.


Figure 3: Privacy-Preserving Biometric Encryption Process
Benefits of Privacy-Preserving Biometric Encryption
This approach delivers significant advantages:

Irreversibility: The layered transformations (salting, LSH, ZKPs) make it computationally infeasible to recover the original biometric data, even with quantum attacks.

Cancelability: A compromised hash can be invalidated and replaced by applying a new salt, allowing re-enrollment without changing the user’s biometrics.

Decentralization: Sharded storage across nodes ensures no single entity can access or misuse the full dataset.

Privacy and Compliance: ZKPs and DP align with GDPR, CCPA, and emerging privacy laws, giving users control and regulators confidence.

Spoofing Resistance: AI enhancements and liveness checks thwart presentation attacks, maintaining system integrity.

Real-World Applications
The technology supports diverse use cases:

Finance: A bank uses InterLink ID for KYC, authenticating customers via encrypted biometrics without storing raw data, reducing liability and fraud.

Healthcare: Patients access records securely via telemedicine platforms, with encrypted biometrics ensuring HIPAA compliance and privacy.

Voting: A decentralized election system verifies voters globally, using privacy-preserving encryption to prevent coercion or data leaks while ensuring one vote per person.

Humanitarian Aid: NGOs distribute aid in refugee camps, verifying identities without creating exploitable centralized databases.

Technical Integration
This encryption integrates seamlessly with InterLink ID’s broader system. The encrypted commitments feed into the deduplication process, ensuring uniqueness without compromising privacy. Backup nodes store sharded commitments, leveraging the failover mechanism to maintain availability. The result is a cohesive identity framework where privacy and resilience reinforce each other.

Figure 3: Privacy-Preserving Biometric Encryption Process visualizes this workflow, from feature extraction to decentralized verification, highlighting the layered security approach.

What is Zero-Knowledge Proof (ZKP)?
A Zero-Knowledge Proof (ZKP) enables one party, the prover (P), to convince another party, the verifier (V), that a statement is true without disclosing any information beyond the statement’s validity. This property makes ZKPs ideal for applications requiring both privacy and verifiability, such as identity management in decentralized environments.

A ZKP must satisfy three core properties:

Completeness: If the statement is true, an honest prover will convince an honest verifier with certainty (probability 1).

Soundness: If the statement is false, no cheating prover can convince the verifier, except with a negligible probability (denoted as 
ε
ε).

Zero-Knowledge: If the statement is true, the verifier learns nothing beyond the fact of its truth, preserving the prover’s privacy.

Mathematically, a ZKP protocol is defined by a tuple 
(
P
,
V
,
S
)
(P,V,S), where:

P
P (Prover): Holds private knowledge, the witness (
w
w), to prove a public statement (
x
x).

V
V (Verifier): Interacts with 
P
P to validate the proof without gaining insight into 
w
w.

S
S (Simulator): A polynomial-time algorithm that generates a transcript indistinguishable from the real 
P
−
V
P−V interaction without access to 
w
w, ensuring the zero-knowledge property.

The standard interactive ZKP protocol follows these steps:

Commitment: 
P
P generates a commitment to a random value and sends it to 
V
V, concealing 
w
w.

Challenge: 
V
V responds with a random challenge to test 
P
P's knowledge.

Response: 
P
P provides a response demonstrating knowledge of 
w
w without revealing it.

Verification: 
V
V checks the response against the commitment and challenge to confirm validity.


Figure 1: Zero-Knowledge Proof Protocol in InterLink ID.
This process is illustrated in Figure 1: Zero-Knowledge Proof Protocol in InterLink ID, which depicts the flow between 
P
P, 
V
V, and 
S
S, emphasizing the protocol’s ability to maintain privacy and security (see diagram description for details).

Formally, for a language 
L
L (a set of valid statements), an interactive proof system satisfies:

∀
x
∈
L
,
∃
P
 such that 
Pr
⁡
[
V
(
P
(
x
)
)
=
accept
]
=
1
∀x∈L,∃P such that Pr[V(P(x))=accept]=1
∀
x
∉
L
,
∀
P
,
Pr
⁡
[
V
(
P
(
x
)
)
=
accept
]
≤
ε
∀x∈
/
L,∀P 
,
 Pr[V(P 
(
 x))=accept]≤ε
where 
P
∗
P 
∗
  represents a cheating prover, and 
ε
ε is a negligible function, ensuring robustness against false claims.

Conclusion
By integrating Proof of Personhood, InterLink ID establishes a fair and democratic framework where each human participant is assured equal representation and influence. This approach not only fortifies the network against identity-based attacks but also upholds the principles of decentralization and individual sovereignty.
Proof of Concept
Humanization In AI
A decentralized identity and AI training solution designed to ensure security, privacy, and trust in the digital world.

InterLink AI is a decentralized identity and artificial intelligence (AI) training platform designed to uphold security, privacy, and trust in digital environments. By leveraging Unique Data Training and Federated Learning, it facilitates the development of high-quality AI models while ensuring that user data remains securely stored on local devices rather than centralized servers.

The platform integrates non-identifiable biometric data from publicly available datasets, strategic partnerships, and governmental sources, enabling both real-time and batch AI processing with a high degree of accuracy. Security is reinforced through hashed biometric pools, zero-knowledge mapping, and trust scoring mechanisms, ensuring robust identity verification while preventing unauthorized access.

InterLink AI enables on-device AI model fine-tuning, preserving data privacy while allowing continuous learning and adaptation. These models are deployed through scalable, serverless architectures to support AI-driven automation and intelligent interactions. Built on high-performance infrastructure, including NVIDIA H100 GPUs and advanced decentralized storage solutions, InterLink AI ensures efficient, scalable processing while adhering to industry standards established by the National Institute of Standards and Technology (NIST).

Unique Data Training
AI model accuracy is often compromised by data contamination, where excessive duplicate and bot-generated inputs degrade learning quality. Conventional AI training methods rely on large-scale, centralized data collection, making them vulnerable to biases, redundancies, and security risks. Unique Data Training addresses these challenges by ensuring that AI models learn exclusively from real, verified human contributors.


Key Mechanisms of Unique Data Training

Human-Verified Data Collection: To prevent bot interference and duplicate data submissions, a proof-of-personhood mechanism is implemented. Each participant undergoes identity verification before contributing data, guaranteeing dataset authenticity and uniqueness. This validation process mitigates the risk of synthetic or fraudulent inputs that could otherwise distort model learning.

Decentralized Data Framework: Unlike traditional centralized storage methods, which pose privacy and security concerns, Unique Data Training operates within a decentralized infrastructure. This approach enables secure, private, and high-quality data acquisition while preserving individual data sovereignty. AI models train on locally stored datasets without direct exposure to centralized repositories, reducing risks associated with data breaches.

Peer-to-Peer Model Refinement: To further enhance learning efficiency, verified contributors can engage in peer-to-peer data sharing, allowing AI models to adapt to diverse datasets without relying on a single controlling authority. This fosters a more resilient and unbiased AI ecosystem, improving model robustness across different use cases.

Improved Decision Accuracy and Ethical AI Development: By ensuring AI models are trained on unique and bot-free data, the resulting algorithms achieve higher decision accuracy and greater reliability. This structured approach eliminates biases, enhances transparency, and promotes ethical AI development, fostering a sustainable data-sharing ecosystem where contributors are incentivized through structured rewards.

Decentralized Federated Learning AI
Decentralized Federated Learning AI represents a transformative approach to machine learning, enabling AI models to be trained directly on user devices without transmitting raw data to centralized servers. This decentralized methodology enhances privacy, security, and efficiency by ensuring that data remains localized while still contributing to collective model improvements. Each device independently trains the AI model using its unique dataset, generating model updates rather than exposing personal information.


Local Training on Devices: Each participating device, including smartphones, tablets, and laptops, independently trains an AI model using locally stored data. This approach ensures that sensitive user information remains on-device, eliminating the need for centralized data collection while still enabling model improvements across the broader AI ecosystem.

Model Distribution: A baseline AI model is initially deployed from a central or distributed node to participating devices, establishing a standardized foundation for localized learning. As users interact with their devices, the model undergoes continuous refinement using real-time, device-specific data. This process preserves data privacy while simultaneously enhancing model performance and personalization.

Peer-to-Peer Model Sharing: To enhance the efficiency and robustness of the training process, devices can exchange model updates directly with nearby nodes in a peer-to-peer manner. This decentralized sharing mechanism reduces dependence on a central authority, fosters collaborative learning, and improves adaptation to diverse data distributions.

Model Updated Distribution: Instead of transmitting raw data, devices generate encrypted model updates, such as weight adjustments, which are securely aggregated. The improved global model is then redistributed to participating devices, ensuring continuous AI advancement while maintaining strict data sovereignty and compliance with privacy standards.

How It Works

The process begins when a user enters the system and undergoes InterLink ID Generation in InterLink App. During this stage, the user scans their face, and the system employs AI deepfake checking, biometric hashing, and proof of personhood techniques to verify their identity. This ensures that each individual is assigned a singular, non-duplicable InterLink ID, guaranteeing both uniqueness and humaness. As a result, every verified user becomes a Unique Human, collectively forming the Human Network. This decentralized network is designed to eliminate duplicate data and prevent bot infiltration, ensuring that AI training data remains authentic and reliable.

On the AI development side, AI model organizations and developers initiate the training process by sending training requests. These requests are distributed within the Human Network, where verified users complete designated training tasks. This Unique Data Training guarantees that the data used for AI model improvement originates exclusively from real humans, enhancing both accuracy and fairness in AI development.

The training itself is conducted directly on human devices, leveraging decentralized computation. Federated Learning AI enables devices within the network to share computational resources for advanced training. This approach allows AI models to be refined locally on user devices without raw data being transmitted to central servers. Instead, only aggregated updates from the trained models are returned to the AI model organizations and developers. This decentralized and privacy-preserving framework not only strengthens data security but also ensures that AI models are trained on diverse, high-quality human-generated data, fostering ethical and transparent AI development.
Proof of Concept
Decentralized Tokens For Human
Distribute token for all human in the world Fair... No Whales, Bot, Machine,...

InterLink ID Technology envisions a world where every human is seamlessly integrated into a decentralized digital ecosystem through a unique, universally distributed token. By ensuring that tokens are allocated fairly to all individuals—free from manipulation by bots, machines, or disproportionate accumulators (“whales”)—InterLink ID redefines equitable access to digital identity, value, and opportunity. This section outlines the proof of concept for achieving this ambitious goal, detailing the mechanisms, safeguards, and innovations that make universal token distribution both feasible and transformative.

Core Principles of Fair Distribution
Fairness is the cornerstone of InterLink ID’s token distribution model. By leveraging our proprietary decentralized identity protocol, we ensure that only verified humans receive tokens, explicitly excluding bots, machines, or automated systems. To prevent the emergence of “whales,” tokens are issued on a one-per-person basis, with mechanisms to deter speculative accumulation. This approach guarantees that the system remains equitable, aligning with our mission to empower every individual globally.

The distribution is guided by several key principles:

Universality: Every human, regardless of geography, socioeconomic status, or technical access, is eligible for one token.

Fairness: Equal distribution and non-transferability prevent concentration of tokens among large holders.

Human-Centricity: Robust identity verification tied to InterLink ID’s decentralized identity framework excludes non-human entities.

Transparency: Blockchain technology ensures the distribution process is auditable and verifiable by all stakeholders.

Accessibility: Offline distribution channels and simplified onboarding address barriers like lack of internet access or technical literacy.

Technical Framework for Token Distribution
InterLink ID’s token distribution is powered by a suite of smart contracts deployed on a scalable blockchain. Upon successful identity verification through our decentralized ID protocol, a smart contract mints a single token to the user’s wallet. To prevent fraud, we integrate zero-knowledge proofs, ensuring privacy while confirming human identity. For scalability, we employ a layer-2 solution to process millions of transactions efficiently, with phased rollouts targeting 100 million users in the first year.

The token is designed as a non-fungible token (NFT) tied to each individual’s unique identity, ensuring it cannot be transferred or duplicated. Distribution leverages InterLink ID’s decentralized identity system, which authenticates humans via biometrics, government-issued IDs, or community attestation. Anti-fraud measures include AI-driven anomaly detection to flag bot activity or duplicate identities, and cryptographic commitments to verify identity without compromising privacy.

Addressing Challenges and Mitigations
A key challenge in universal token distribution is preventing Sybil attacks, where malicious actors create multiple identities to claim extra tokens. InterLink ID counters this through a multi-layered verification process, combining biometric authentication with community-based attestation for regions lacking formal IDs. Pilot tests demonstrated a 99.8% success rate in filtering out non-human or duplicate claims, validating the robustness of our approach.

Other challenges include:

Whale Accumulation: Mitigated by non-transferable tokens and governance rules limiting secondary market trading.

Digital Divide: Addressed through offline distribution channels (e.g., mobile vans, community centers) and simplified onboarding via SMS or USSD for feature phones.

Regulatory Compliance: Engagement with regulators ensures tokens comply with KYC/AML laws while preserving decentralization.

Scalability: Optimized blockchain throughput and hybrid on-chain/off-chain models handle billions of users.

Use Cases and Impact
InterLink ID’s tokens unlock a range of transformative use cases:

Identity and Access: Tokens serve as a decentralized ID, granting access to digital services like voting, banking, and education.

Economic Inclusion: Tokens enable participation in a global digital economy, especially for the unbanked. For example, tokens enabled 10,000 farmers to access microloans.

Governance: Tokens empower users to vote in decentralized governance systems, ensuring equitable decision-making.

Social Good: Tokens can be used for universal basic income, humanitarian aid, or carbon credit systems.

The impact is profound: projected to onboard 1 billion users by 2030, reducing financial exclusion by 20%.

The “Decentralized Tokens for Human” initiative represents a bold step toward a fairer, more inclusive digital future. By distributing tokens to every human while safeguarding against manipulation, InterLink ID Technology proves that universal access is not only possible but actionable. As we move to the next phase of our proof of concept, we invite partners, communities, and innovators to join us in building a decentralized ecosystem where every individual has a voice and a stake.
Technical Implementation
Deepfake Detection and Facial Recognition
In an era where digital identity fraud is escalating, InterLink ID introduces a groundbreaking AI-driven liveness detection and deepfake resistance system. Deepfakes—AI-generated videos or images mimicking real people—threaten security, with misuse ranging from financial fraud to disinformation. A 2023 Deeptrace report notes that deepfake content online doubles every six months, underscoring the need for advanced countermeasures. This section details how InterLink ID authenticates users while resisting such threats.

Core Technology: Facial Recognition Stack

Our facial recognition system is built on cutting-edge deep learning models, including convolutional neural networks (CNNs) and vision transformers (ViTs). These models, such as variants of XceptionNet and EfficientNet, are trained on extensive datasets comprising both authentic and synthetic facial images. This training enables the system to pinpoint the subtle visual cues — like unnatural skin textures or irregular blinking — that signal a deepfake. For a sequence of facial frames 
X
=
{
x
1
,
x
2
,
.
.
.
,
x
T
}
X={x 
1
​
 ,x 
2
​
 ,...,x 
T
​
 }, where each frame 
x
t
x 
t
​
  is a high-resolution image, our detection model 
f
(
X
;
θ
)
f(X;θ) assesses authenticity by calculating:

P
(
authentic
∣
X
)
=
σ
(
f
(
X
;
θ
)
)
P(authentic∣X)=σ(f(X;θ))
Here, 
σ
σ is the sigmoid function, delivering a probability score between 0 (synthetic) and 1 (authentic).

Detecting Deepfakes: A Multi-Layered Approach

Deepfakes often betray themselves through inconsistencies in motion or appearance. Our system employs both spatial analysis (examining individual images) and temporal analysis (tracking motion across frames). For instance, we use an optical flow function, 
Φ
(
R
t
,
R
t
+
1
)
Φ(R 
t
​
 ,R 
t+1
​
 ), to measure movement consistency between consecutive facial regions of interest (ROIs):

Φ
(
R
t
,
R
t
+
1
)
=
∑
i
,
j
∣
∣
R
t
(
i
,
j
)
−
R
t
+
1
(
i
,
j
)
∣
∣
2
Φ(R 
t
​
 ,R 
t+1
​
 )= 
i,j
∑
​
 ∣∣R 
t
(i,j)
​
 −R 
t+1
(i,j)
​
 ∣∣ 
2
 
Lower coherence in motion often indicates a synthetic sequence, as generative models struggle to replicate natural dynamics perfectly.

Additionally, we apply spectral analysis to uncover frequency-domain artifacts typical of AI-generated content. By computing the Fourier transform of an image signal, 
X
^
=
F
(
X
)
X
^
 =F(X), we detect irregular frequency patterns that distinguish deepfakes from genuine footage. The model refines its accuracy by minimizing a binary cross-entropy loss:

L
B
C
E
=
−
∑
i
y
i
log
⁡
(
y
^
i
)
+
(
1
−
y
i
)
log
⁡
(
1
−
y
^
i
)
L 
BCE
​
 =− 
i
∑
​
 y 
i
​
 log( 
y
^
​
  
i
​
 )+(1−y 
i
​
 )log(1− 
y
^
​
  
i
​
 )
where 
y
i
y 
i
​
  is the true label and 
y
^
i
y
^
​
  
i
​
  is the predicted probability.

Liveness Detection: Verifying Real-Time Presence

To counter attacks using static images or pre-recorded videos, InterLink ID integrates liveness detection. This system analyzes real-time physiological signals—such as eye movements, micro-expressions, or subtle skin texture shifts—requiring users to perform actions like blinking or smiling. This ensures the subject is physically present, adding an extra layer of security.


Figure 1: Deepfake detection and liveness verification process in InterLink ID.
Privacy and Ethical Design

Facial recognition raises privacy concerns, which InterLink ID addresses proactively. Biometric data is processed locally on users’ devices, with only encrypted, anonymized features sent for verification. This minimizes breach risks and aligns with regulations like GDPR and CCPA, ensuring trust and compliance.

Performance Metrics and Robustness

In controlled evaluations, our CNN-based deepfake detection model achieved an accuracy exceeding 90% on challenging benchmark datasets, surpassing the 89% reported for XceptionNet in similar settings. Additionally, our system incorporates federated learning mechanisms, enabling continuous refinement of model parameters based on adversarial attempts encountered in production. Let 
θ
(
t
)
θ 
(t)
  denote the model parameters at iteration 
t
t. The update rule follows:

θ
(
t
+
1
)
=
θ
(
t
)
−
η
∇
θ
L
θ 
(t+1)
 =θ 
(t)
 −η∇ 
θ
​
 L
where 
η
η is the learning rate and 
L
L represents the loss function. This approach ensures resilience against emerging deepfake generation techniques.

To enhance adversarial robustness, we integrate an ensemble of spatial CNNs and temporal analysis models with cross-modal verification mechanisms. Attackers attempting to spoof the system must circumvent multiple layers of security, including facial recognition, liveness detection, and artifact analysis. This multi-faceted defense significantly raises the computational and technical barriers for malicious actors, surpassing traditional video-call or selfie-based verifications. Additionally, cryptographic integrity verification safeguards the biometric enrollment process, ensuring that only audited AI models contribute to identity verification.

While no biometric authentication system is entirely impervious to adversarial attacks, InterLink ID significantly elevates the cost and complexity of identity spoofing, offering a robust, scalable, and high-fidelity facial authentication framework.
Technical Implementation
Encrypted Biometric Data
Traditional biometric authentication systems store raw biometric data—such as fingerprints, facial images, or voice samples—directly in centralized databases, creating significant privacy and security vulnerabilities. A single breach could expose sensitive user information, and the centralized nature of these systems makes them prime targets for attackers. Additionally, such approaches often struggle to comply with stringent privacy regulations like the General Data Protection Regulation (GDPR) and the California Consumer Privacy Act (CCPA). InterLink ID revolutionizes this paradigm by employing zero-knowledge proofs (ZKP) and homomorphic encryption to transform biometric features into irreversible, encrypted representations. This enables secure, decentralized identity verification without ever storing or exposing raw biometric data, striking a balance between uniqueness (each individual has a distinct encrypted identity) and privacy (no sensitive information is revealed).

Here’s a detailed breakdown of the privacy-preserving biometric encryption process in InterLink ID:

Feature Extraction: The process begins with extracting distinctive features from a biometric input, such as a facial image, fingerprint, or iris scan. InterLink ID uses advanced deep learning models—such as ResNet or Vision Transformers (ViT)—pre-trained on large datasets to map the raw biometric data 
B
B into a high-dimensional feature vector 
F
F:

F
=
f
(
B
)
∈
R
d
F=f(B)∈R 
d
 
where 
d
d represents the dimensionality of the feature space, and 
f
(
⋅
)
f(⋅) is the deep learning-based feature extractor. These models excel at capturing robust, unique characteristics, making them ideal for reliable identity verification.

Quantization and Secure Transformation: To enhance privacy and security, the feature vector 
F
F undergoes a series of transformations:

Biometric Salting and Random Projection Hashing: A randomized orthogonal transformation T T T is applied to decorrelate the feature components, preventing attackers from reconstructing the original features:

F
′
=
T
F
F 
′
 =TF
where 
T
T is a randomly generated orthogonal matrix.

Locality-Sensitive Hashing (LSH): The transformed vector 
F
′
F 
′
  is then mapped to a fixed-length binary hash using an LSH function:

H
(
F
′
)
=
(
h
1
,
h
2
,
.
.
.
,
h
m
)
,
h
i
=
sign
(
w
i
T
F
′
+
b
i
)
H(F 
′
 )=(h 
1
​
 ,h 
2
​
 ,...,h 
m
​
 ),h 
i
​
 =sign(w 
i
T
​
 F 
′
 +b 
i
​
 )
where 
w
i
w 
i
​
  are random projection vectors, and 
b
i
b 
i
​
  are bias terms. LSH ensures that similar biometric inputs produce similar hashes, enabling approximate matching while obscuring exact feature values.

Zero-knowledge Biometric Encryption: Rather than storing the biometric hash 
H
(
F
′
)
H(F 
′
 ) directly, InterLink ID employs a zero-knowledge proof (ZKP)-based commitment scheme using a Pedersen commitment:

C
=
g
H
(
F
′
)
h
r
mod 
p
C=g 
H(F 
′
 )
 h 
r
 mod p
where 
g
g and 
h
h are generators of a cyclic group, 
r
r is a random blinding factor, andis a large prime number. This commitment allows the system to store a representation of the biometric hash without revealing it, ensuring that even if the stored data is accessed, the original biometric information remains protected.

Decentralized Verification: The commitment 
C
C is stored in the Decentralized InterLink ZK Biometric Node Pool, a distributed ledger-based trust pool. During authentication, the user (prover) generates a zero-knowledge proof of knowledge (ZKPoK) to demonstrate that their biometric hash matches the stored commitment 
C
C without disclosing 
H
(
F
′
)
H(F 
′
 ). The decentralized node pool collectively verifies this proof, ensuring a secure and privacy-preserving authentication process with no centralized point of failure.

AI-Powered Encryption Enhancements: InterLink ID integrates state-of-the-art AI techniques to bolster the encryption process:

Self-Supervised Learning (SSL): Models like SimCLR and BYOL extract robust feature representations without labeled data, reducing overfitting and enhancing resilience against adversarial attacks.

Differential Privacy (DP): Noise is injected into the biometric features before hashing, preventing reconstruction of the original input even if an attacker accesses the hashed data.

Generative Adversarial Networks (GANs): Synthetic biometric data generated by GANs is used to test the system’s robustness against spoofing, ensuring it can distinguish genuine inputs from fabricated ones.

Security and Privacy Guarantees: This approach delivers several key benefits:

Irreversibility: The multi-step transformation and encryption process makes it computationally infeasible to recover the original biometric data.

Cancelability: If a biometric encryption is compromised, a new transformation matrix 
T
T can be issued, allowing users to re-enroll without altering their underlying biometrics.

Decentralization: Distributed storage and verification eliminate single points of failure, enhancing system resilience.

Compliance with Privacy Regulation: InterLink ID’s design inherently aligns with global privacy regulations, such as GDPR and CCPA. By never storing raw biometric data and using zero-knowledge proofs for verification, the system minimizes the risk of unauthorized data exposure, a key requirement under GDPR’s data minimization principle. The decentralized architecture ensures transparency and accountability, allowing users to maintain control over their personal information as mandated by CCPA. This compliance not only mitigates legal risks but also builds trust with users and stakeholders in privacy-sensitive markets.

Real-World Applications: InterLink ID’s privacy-preserving biometric encryption has broad applicability across industries. In finance, it enables secure customer onboarding and transaction authentication without exposing biometric data, reducing fraud risks. In healthcare, it protects patient identities during telemedicine or electronic health record access, ensuring compliance with HIPAA alongside GDPR. For government services, it facilitates secure voter verification or border control, balancing security with citizen privacy. These applications highlight the versatility and real-world impact of InterLink ID’s technology.

Innovation in Biometric Security: Unlike traditional biometric systems that rely on centralized storage and direct template matching, InterLink ID integrates zero-knowledge proofs with AI-driven feature extraction to achieve unparalleled privacy and security. Conventional methods expose raw data during breaches and lack cancelability, whereas InterLink ID’s encrypted, decentralized approach ensures data remains protected and renewable. This fusion of cryptography and artificial intelligence sets a new benchmark for biometric authentication, addressing longstanding privacy challenges in digital identity management.

Future-Proofing the System: InterLink ID is engineered to evolve with emerging threats and technological advancements. The modular use of AI models allows for seamless integration of next-generation feature extractors, such as improved Vision Transformers or quantum-resistant neural networks. Similarly, the cryptographic framework supports updates to zero-knowledge protocols as quantum computing advances, ensuring long-term security. This adaptability positions InterLink ID as a resilient solution for the future of digital identity verification.


Figure 1: Privacy-Preserving Biometric Encryption in InterLink ID.
The privacy-preserving biometric encryption technique in InterLink ID presents a groundbreaking approach to secure identity verification. By combining it with federated learning, InterLink ID strikes a balance between uniqueness (each human has one encrypted representation) and privacy (no raw biometric data exposed).
Technical Implementation
Zero-Knowledge Proofs
Zero-Knowledge Proofs (ZKPs) are a transformative cryptographic technique that underpin InterLink ID Technology’s approach to privacy-preserving identity verification in the Web3 ecosystem. This section explores the fundamentals of ZKPs, their applications in blockchain and decentralized systems, and how InterLink ID leverages this technology to deliver secure, trustless authentication while addressing implementation challenges and future opportunities.

What is Zero-Knowledge Proof (ZKP)?
A Zero-Knowledge Proof (ZKP) enables one party, the prover (P), to convince another party, the verifier (V), that a statement is true without disclosing any information beyond the statement’s validity. This property makes ZKPs ideal for applications requiring both privacy and verifiability, such as identity management in decentralized environments.

A ZKP must satisfy three core properties:

Completeness: If the statement is true, an honest prover will convince an honest verifier with certainty (probability 1).

Soundness: If the statement is false, no cheating prover can convince the verifier, except with a negligible probability (denoted as 
ε
ε).

Zero-Knowledge: If the statement is true, the verifier learns nothing beyond the fact of its truth, preserving the prover’s privacy.

Mathematically, a ZKP protocol is defined by a tuple 
(
P
,
V
,
S
)
(P,V,S), where:

P
P (Prover): Holds private knowledge, the witness (
w
w), to prove a public statement (
x
x).

V
V (Verifier): Interacts with 
P
P to validate the proof without gaining insight into 
w
w.

S
S (Simulator): A polynomial-time algorithm that generates a transcript indistinguishable from the real 
P
−
V
P−V interaction without access to 
w
w, ensuring the zero-knowledge property.

The standard interactive ZKP protocol follows these steps:

Commitment: 
P
P generates a commitment to a random value and sends it to 
V
V, concealing 
w
w.

Challenge: 
V
V responds with a random challenge to test 
P
P's knowledge.

Response: 
P
P provides a response demonstrating knowledge of 
w
w without revealing it.

Verification: 
V
V checks the response against the commitment and challenge to confirm validity.


Figure 1: Zero-Knowledge Proof Protocol in InterLink ID.
This process is illustrated in Figure 1: Zero-Knowledge Proof Protocol in InterLink ID, which depicts the flow between 
P
P, 
V
V, and 
S
S, emphasizing the protocol’s ability to maintain privacy and security (see diagram description for details).

Formally, for a language 
L
L (a set of valid statements), an interactive proof system satisfies:

∀
x
∈
L
,
∃
P
 such that 
Pr
⁡
[
V
(
P
(
x
)
)
=
accept
]
=
1
∀x∈L,∃P such that Pr[V(P(x))=accept]=1
∀
x
∉
L
,
∀
P
,
Pr
⁡
[
V
(
P
(
x
)
)
=
accept
]
≤
ε
∀x∈
/
L,∀P 
,
 Pr[V(P 
(
 x))=accept]≤ε
where 
P
∗
P 
∗
  represents a cheating prover, and 
ε
ε is a negligible function, ensuring robustness against false claims.

Applications of ZKP in Web3 and Blockchain
ZKPs enhance privacy, security, and scalability across Web3 and blockchain ecosystems. InterLink ID harnesses these capabilities to provide trustless identity verification and privacy-preserving authentication, ensuring users retain sovereignty over their data. Below are key applications, with specific ties to InterLink ID’s implementation.

Privacy-Preserving Identity Verification

InterLink ID employs ZKPs to allow users to prove identity attributes without exposing sensitive details. For example, a user can demonstrate they are over 18—satisfying age-restricted access—without revealing their birth date. As shown in Figure 1, the prover commits to a random value tied to their attribute, enabling verification while preserving privacy.

zk-SNARKs and zk-STARKs in Blockchain

zk-SNARKs (Zero-Knowledge Succinct Non-Interactive Argument of Knowledge): These enable compact, efficient proofs for private transactions, as seen in Zcash, where transaction details are shielded. InterLink ID could use zk-SNARKs to validate identity proofs succinctly on-chain.

zk-STARKs (Scalable Transparent Argument of Knowledge): These improve on zk-SNARKs by eliminating trusted setups and offering post-quantum security. In Ethereum’s zk-Rollups, zk-STARKs verify off-chain computations on-chain, a model InterLink ID leverages for scalable identity validation (see Figure 1’s optimized Verify step).

Decentralized Authentication: ZKPs enable passwordless authentication, enhancing security by proving credential knowledge without transmission. For instance, the Ethereum Name Service (ENS) could use ZKPs to verify domain ownership without exposing private keys, a technique InterLink ID adapts for seamless user authentication.

Proof-of-Reserves in DeFi: In decentralized finance (DeFi), ZKPs prove asset holdings without disclosing wallet addresses or balances. Exchanges like Binance and Kraken use ZKP-based audits for transparency, a concept InterLink ID could extend to verify institutional identity claims anonymously.

Secure Voting and DAO Governance: ZKPs ensure private, transparent voting in decentralized autonomous organizations (DAOs). A member proves eligibility without revealing their identity or vote, a mechanism InterLink ID could integrate into governance-related identity solutions.

InterLink ID’s Implementation of ZKPs:

InterLink ID integrates ZKPs into its identity framework as follows:

User Registration: Users generate ZKPs for identity attributes (e.g., age, nationality) using private data, storing only the proof commitment.

Verification Request: When a service requires verification (e.g., age for access), the user submits a ZKP proving the attribute.

On-Chain Verification: The blockchain validates the proof, ensuring authenticity without exposing the underlying data.

This process, aligned with Figure 1, ensures privacy and decentralization, key tenets of InterLink ID’s mission.

Challenges and Solutions: 

Implementing ZKPs presents challenges that InterLink ID addresses strategically:

Computational Overhead: Proof generation and verification can be resource-intensive. InterLink ID optimizes this using efficient systems like zk-STARKs, reducing latency in the Commitment and Response phases (see Figure 1).

Trusted Setup: zk-SNARKs require a trusted setup, posing security risks. InterLink ID prefers zk-STARKs, which avoid this dependency, enhancing transparency.

User Experience: Complex protocols may deter adoption. InterLink ID streamlines ZKP integration into user workflows, ensuring accessibility without sacrificing security.

Future Directions for ZKPs in InterLink ID:

InterLink ID is poised to advance ZKP technology to meet evolving Web3 demands:

Post-Quantum Security: Researching quantum-resistant ZKPs to safeguard against future threats, ensuring long-term viability.

Scalability Enhancements: Reducing proof size and verification time to support real-time identity applications, building on Figure 1’s framework.

Integration with Emerging Primitives: Combining ZKPs with homomorphic encryption or multi-party computation for advanced privacy-preserving solutions, such as collaborative identity verification.

Zero-Knowledge Proofs are a foundational cryptographic technique that enhances privacy, security, and scalability in Web3 applications. InterLink ID Technology utilizes ZKPs to enable secure and trustworthy identity verification and privacy-preserving authentication, ensuring users maintain control over their personal information in a decentralized ecosystem.

Technical Implementation
Federated Learning

Figure 1: Federated learning architecture showing how InterLink Network trains AI models across distributed devices while preserving user privacy. Model updates are aggregated centrally while raw biometric data never leaves user devices.
Training Phase
InterLink Network employs federated learning (FL) to train its AI models (e.g., deepfake detection, fraud detection, etc.) across thousands of user devices and nodes without exposing raw biometric data. As a next-generation digital identity platform designed for the decentralized era, InterLink ID provides a secure and private method to verify one's unique human identity, acting as a universal passport in the digital world. Unlike conventional federated learning systems, InterLink first establishes user uniqueness through its proprietary hashing technology, assigning each enrolled user a distinct cryptographic identity within the Network. InterLink ID also converts biometric data provided by users into secure, irreversible embeddings for federated training, ensuring privacy and security while enabling collaborative model improvement.

By using biometrics (a face scan) instead of passwords or documents, InterLink ID dramatically improves both security and convenience. Users can prove "I am a real person and I am unique" without sharing sensitive personal details each time. In a federated round, each client (user's device or a node) computes updates to the global model using only these secure irreversible high-dimensional embeddings of the provided user data, and only model updates (e.g., gradients or weight deltas) are sent to the aggregator (server), never the raw biometric data. The server then performs a weighted averaging of the updates to improve the global model. Formally, if 
F
k
(
w
)
F 
k
​
 (w) is the local loss on client 
k
k's data, federated averaging optimizes the global model 
w
w by minimizing the global loss 
F
(
w
)
=
∑
k
=
1
K
n
k
N
F
k
(
w
)
F(w)=∑ 
k=1
K
​
  
N
n 
k
​
 
​
 F 
k
​
 (w), where 
n
k
n 
k
​
  is the number of samples on client 
k
k and 
N
N is the total number of samples across all devices. After each round, model parameters are updated as:

w
t
+
1
←
w
t
−
η
∑
k
=
1
K
n
k
N
∇
F
k
(
w
t
)
w 
t+1
​
 ←w 
t
​
 −η 
k=1
∑
K
​
  
N
n 
k
​
 
​
 ∇F 
k
​
 (w 
t
​
 )
which is a gradient descent step combining all clients' contributions. Through this process, the AI model improves collectively: for example, learning to better distinguish between real transactions and fraudulent ones as more clients enroll in the system, without compromising individual biometric data. Federated learning comes with theoretical convergence guarantees under certain conditions, and techniques like secure aggregation and differential privacy can be layered in to ensure no single participant's data can be reconstructed from model updates.

Resource sharing and optimization: InterLink Network optimizes federated learning for diverse, heterogeneous devices through strategies like FedAvg with adaptive learning rate 
η
η and lightweight model architectures. Techniques such as model pruning and model quantization reduce computational overhead, allowing even resource-constrained mobile devices to participate with minimal latency or power consumption. Users can opt-in to contribute resources during idle periods (e.g., while charging or on Wi-Fi), earning token rewards proportional to their computational effort. On-chain checkpoints, recorded via blockchain, enhance transparency and fault tolerance. This distributed computing framework not only boosts model accuracy over time but also eliminates centralized data vulnerabilities, aligning with InterLink ID's decentralized ethos.

Backup Mechanism for Intermediate Nodes: To ensure resilience, InterLink ID implements a robust backup mechanism for intermediate nodes that store encrypted biometric embeddings. As depicted in Figure 1, these nodes operate as a distributed layer between clients and the aggregator, enhancing security and continuity. The mechanism includes:

Redundant Storage: Encrypted embeddings are replicated across multiple nodes, providing fault tolerance.

Real-time Monitoring: Continuous health and security checks detect anomalies or failures in real time.

Automatic Failover: Upon detecting an attack or node failure, the system activates backup storage, seamlessly restoring encrypted data with minimal disruption.

Data Integrity Checks: Cryptographic hash functions (e.g., SHA-256) verify the consistency and authenticity of stored embeddings, ensuring resilience against tampering.

This architecture, illustrated in Figure 1, ensures that the federated learning process remains operational and secure, even under adversarial conditions, preserving both data integrity and user privacy.

Inference Phase
The inference phase in a federated learning system is crucial for deploying the trained model to make predictions on new data while maintaining the privacy and security principles established during training. In the context of InterLink ID, the inference phase involves using the globally trained model to verify user identities without exposing sensitive biometric data.

Inference Process:

Local Data Processing: When a user attempts to authenticate, their biometric data (e.g., a face scan) is processed locally on their device. Let 
B
B represent the raw biometric data. The biometric data is converted into secure, irreversible embeddings 
E
E using the same feature extraction and hashing techniques employed during training: 
E
=
f
(
B
)
E=f(B) where 
f
f is the feature extraction function.

Local Model Application: The locally processed embeddings 
E
E are then fed into the globally trained model 
M
M, which resides on the user's device. This model has been updated through federated learning rounds and contains the collective knowledge from all participating devices:   
P
=
M
(
E
)
P=M(E) where 
P
P is the prediction output.

Prediction Generation: The model generates a prediction 
P
P based on the local embeddings. For identity verification, this prediction could be a probability score 
p
p indicating the likelihood that the user is who they claim to be: 
p
=
σ
(
P
)
p=σ(P) where 
σ
σ is the sigmoid activation function.

Secure Communication: If necessary, the prediction 
p
p or a summary of the inference results can be securely communicated to a central server or a decentralized network for further validation. However, the raw biometric data 
B
B and embeddings 
E
E remain on the user's device, ensuring privacy.

Decision Making: Based on the prediction 
p
p, the system makes a decision regarding the user's authentication request. This decision can be made locally or in conjunction with additional verification steps performed by the central server or decentralized network.

Advantages of Federated Inference:

Privacy Preservation: By keeping the raw biometric data 
B
B and embeddings 
E
E on the user's device, the inference phase maintains the privacy and security principles of federated learning.

Reduced Latency: Local inference reduces the need for constant communication with a central server, resulting in faster authentication times.

Scalability: The decentralized nature of federated inference allows the system to scale efficiently, handling a large number of authentication requests without overloading a central server.

Robustness: The use of a globally trained model 
M
M ensures that the system benefits from the collective knowledge of all participating devices, improving the accuracy and robustness of predictions.

Example Workflow:

User Authentication Request: A user initiates an authentication request by providing a biometric input 
B
B (e.g., a face scan).

Local Processing: The user's device processes the biometric input 
B
B, converting it into secure embeddings 
E
E: 
E
=
f
(
B
)
E=f(B)

Local Inference: The locally stored model 
M
M generates a prediction 
P
P based on the embeddings 
E
E: 
P
=
M
(
E
)
P=M(E)

Secure Validation: If needed, the prediction 
p
=
σ
(
P
)
p=σ(P) is securely communicated to a central server or decentralized network for additional validation.

Authentication Decision: The system makes a final decision on the authentication request, granting or denying access based on the prediction 
p
p.


Figure 2: Example workflow of the federated inference process in InterLink ID.
By integrating federated learning into both the training and inference phases, InterLink ID ensures a secure, private, and efficient identity verification process that aligns with the principles of decentralization and user control.

Integration with Proprietary Technology: InterLink ID’s federated learning leverages its proprietary hashing technology to create cryptographic identities and secure embeddings. Each user’s biometric data is salted and hashed into a unique identifier, enabling precise tracking of contributions without revealing personal details. During training, embeddings are generated via a hybrid CNN-hashing pipeline, ensuring compatibility with the global model while thwarting reverse-engineering attempts. This integration enhances both privacy and the system’s ability to scale across diverse populations.

Performance Evaluation: InterLink ID’s federated learning system achieves a False Acceptance Rate (FAR) below 0.001 and a False Rejection Rate (FRR) below 0.005, validated across 10,000 devices. Compared to centralized models, it offers a 20% improvement in fraud detection accuracy due to its diverse training data. Inference latency averages 450 ms on mid-range smartphones, with energy consumption reduced by 30% through optimization techniques, ensuring accessibility and efficiency.

User Incentives and Participation: To encourage participation, InterLink ID offers token rewards based on computational contributions, calculated as 
R
k
=
α
⋅
n
k
⋅
t
k
R 
k
​
 =α⋅n 
k
​
 ⋅t 
k
​
 , where 
α
α is a reward rate, 
n
k
n 
k
​
 ​ is the client’s sample size, and 
t
k
t 
k
​
  is training time. Users opt-in via a transparent interface, controlling when their device trains (e.g., overnight). This incentivized model has boosted participation rates by 40%, creating a self-sustaining network that enhances model accuracy over time.

Future Directions: InterLink ID aims to enhance federated learning with homomorphic encryption, enabling computations on encrypted updates for added privacy. Plans also include integrating secure multi-party computation (SMPC) to further decentralize aggregation, reducing reliance on a central server. These advancements will position InterLink ID as a leader in privacy-preserving AI, adapting to emerging threats like quantum attacks.
InterLink Tokenomics
Introducing
InterLink Token is the native digital asset of the InterLink Network — designed to become the most widely distributed and human-owned token in the world.

Unlike traditional cryptocurrencies — and even Bitcoin, which favors those with early capital or mining hardware — InterLink Token is earned exclusively by real, verified humans through proof of personhood. One person, one node, one opportunity to participate. No rigs, no bots, no manipulation.

Where Bitcoin proves computational power, InterLink Token proves humanity.

With a vision to onboard 1 billion real people, InterLink aims to become the most decentralized cryptocurrency in terms of human distribution — powering governance, applications, and the on-chain reputation economy.

This is not just a token. 
It’s the economic layer of the Human Network.
InterLink Token And InterLink Genesis
The InterLink Token ($ITL) and InterLink Genesis ($ITLG) models are inspired by Bitcoin and Ethereum, respectively.

$ITL serves as a reserve asset for businesses and stakeholders — primarily used for staking to access the InterLink Human Layer.

Meanwhile, $ITLG functions as the utility token within the broader InterLink ecosystem.
InterLink Token ($ITL)
Token of Trust & Institutional Alignment in InterLink

💠  $ITL (InterLink Token):
$ITL is designed to embody institutional alignment and long-term credibility within the InterLink ecosystem. It plays a critical role in enabling structured, reliable access to the Human Layer — a global network of verified, bot-resistant users.

🏛️  Held by:
Venture Capital Firms

Institutional Players

Ecosystem Partners

Human Nodes committed to InterLink’s long-term vision

Together, these holders signal trust, stability, and alignment with the network’s governance and direction.

🔧 Utility:
Staking for Access to the Human Layer

Partners, platforms, and protocols must stake $ITL to integrate and interact with verified human users — ensuring a trusted foundation for apps, rewards, and governance.

Foundation Reserve & Coordination Layer

$ITL is used by the InterLink Foundation as part of its strategic reserve, aligning incentives across stakeholders and supporting ecosystem-level decisions.

📊 Allocation:

$ITL Allocation
InterLink Genesis Token ($ITLG)
The token is designed to sustain the network and power the entire ecosystem.

💠  $ITLG (InterLink Genesis Token):
$ITLG represents the active participation of real humans in the InterLink network. Minted through human verification and activity, $ITLG powers core engagement, governance, and utility within the Human Network.

🏛️  Held by:
Human Nodes & Miners

Verified users who contribute to the network by participating, verifying, referring, and engaging in applications within the InterLink ecosystem.

🔧 Utility:
DAO Voting Power

$ITLG holders vote on key ecosystem proposals, enabling bottom-up governance driven by verified human participants.

Ecosystem Incentives

Receive token incentives from projects building on the Human Network — proportional to $ITLG holdings and participation level.

Early Access to Launchpads

Priority allocation and whitelist access for new project launches within the InterLink ecosystem.

Payment in Mini-App Ecosystem

Spendable within games, apps, and services running on InterLink — acting as the primary medium of exchange for on-chain utilities.

📊 Allocation:

$ITLG Allocation

$ITLG Allocation
Our long-term goal is to reach 1 billion users. Once $ITLG reaches its maximum supply, the decision on how to proceed will be put to a InterLink DAO vote by $ITLG holders. They will determine whether to maintain the fixed supply to preserve scarcity, or to increase the supply strategically in order to attract more Human Nodes and further strengthen the overall value of $ITLG.
ITL - The Human Currency of Global Payments
$ITL is the first digital currency designed for direct, peer-to-peer payments between verified humans — without the need for banks, governments, or intermediaries.

It enables anyone with a phone and a face to earn, hold, and transfer value globally — bot-free, permissionless, and borderless.

🌐 Why the World Needs $ITL
Over 1.4 billion adults remain unbanked (World Bank, 2021).

They lack:

• Formal financial institutions

• National identity documents

• Access to global payment systems

• Inclusion in digital labor, education, or healthcare

Yet most own smartphones, connect to the internet, and are ready to contribute.

Still, traditional finance and Web2 were never built for them.

Even Web3, captured by bots and capital, has failed to serve them meaningfully.

🌍 Real Use Cases That Matter
• Humanitarian Aid

NGOs can transfer $ITL directly to verified individuals in disaster zones — eliminating delays, fraud, and leakage.

• Cross-Border Health & Education

Organizations like WHO or UNICEF can issue micro-grants, medical subsidies, or digital education credits — directly to verified users.

• AI Training at Global Scale

Big tech companies like Google, Meta, and Microsoft need vast amounts of real human data to train AI systems.

$ITL enables them to compensate verified users directly for contributing high-quality, ethically sourced data — from faces and voices to behavior.
FAQ
When will the token be listed on an exchange? What will the TGE (Token Generation Event) look like?

The current plan is to list the token toward the end of 2025 or early 2026. However, now that we have the InterLink DAO, all major decisions will be made transparently with the community.

It’s important to remember that listing too early may not be ideal if the project hasn’t reached a mature and ready state — and listing too late may also carry opportunity costs. Therefore, the final decision will be made through a vote by $ITLG holders.

For the TGE, the system will calculate the token unlock schedule based on a linear relationship with the number of tokens held — with a maximum vesting period of up to 180 months. The more tokens one holds, the longer the lock-up period, ensuring price stability and sustainable growth of the ecosystem.

Will the token face excessive inflation? Are there still more halving events planned?

The token will be burned and used as a medium of exchange throughout the entire ecosystem. Additionally, we’ve completely eliminated bots and farmers from the system, making exploitation by mining farms or automation virtually impossible.

Halving events will continue — potentially up to 100 times — to ensure a consistent reduction in emissions and long-term value preservation.

Does adopting a dual-token model with $ITL and $ITLG risk diluting overall value?

No — the dual-token model was carefully designed to separate governance, utility, and strategic functions in a way that reinforces long-term value creation rather than diluting it.

$ITLG serves as the genesis token, earned exclusively through mining by verified humans. It governs the InterLink DAO and plays a critical role in expanding the human network — including future use cases like enabling a decentralized payment layer across the ecosystem.

$ITL is the core utility and strategic token, structured for integration with ecosystem partners, institutions, and large-scale capital (e.g. funds and infrastructure players). It’s also the token InterLink will align with future public offerings or stock listings, offering a regulatory-friendly, institution-ready model.

By clearly distinguishing roles — with $ITLG anchoring community growth and governance, and $ITL powering economic utility and external integration — InterLink avoids value fragmentation and instead builds a dual-token architecture with complementary strengths that can scale across retail, institutional, and regulatory layers.

What will the $ITLG token price be at listing?

We have our own internal formula to determine a fair valuation, and it will be directly proportional to the number of users in the network.

Why was ITLG initially said to be 10 billion? Did you increase the supply due to user growth?

No. The total supply of InterLink Token ($ITL) has always been fixed at 10 billion, and this has never changed.

As for InterLink Genesis Token ($ITLG) — the supply was also transparently shared from the beginning with partners, investors, and ecosystem stakeholders. This includes global names such as Google, AWS, NIST, and NYSE-aligned institutions, who were fully informed of the token model before committing to the InterLink vision.
Token Mining Mechanism and Sustainability
In the early stages of network growth, mining activities are intentionally designed to be accessible and straightforward. This approach encourages mass adoption, rapid user onboarding, and the strengthening of the human node network.

However, to ensure long-term sustainability and fairness, InterLink has implemented a dynamic mining mechanism that balances incentives between early participants and new entrants:

Balanced Reward Structure: The mining algorithm is designed so that new users are not left too far behind in token acquisition, while early adopters still maintain strong incentives to continue mining actively.

Anti-Bot Protection: With real human verification through InterLink ID, bot activities are fully mitigated, ensuring that only genuine users participate in mining rewards.

Token Locking Mechanism: A proportion of mined tokens is subject to strategic vesting and locking schedules. This maintains a healthy token supply-demand balance and prevents excessive immediate circulation.

Equitable Profit Opportunities: The mechanism ensures that both small and large token holders can achieve favorable returns without disproportionately affecting the overall token price.

While rapid mining activity is a common phenomenon during the initial expansion phases, InterLink’s architecture guarantees that token inflation is tightly controlled.

Through real human verification, vesting mechanisms, and a carefully calibrated reward model, InterLink preserves both token value and mining attractiveness over time — fostering a healthy, self-sustaining ecosystem for all participants.

Mining accessibility today, sustainable value for tomorrow.
Vision
Building the World’s Largest Real Human Network

InterLink Network is on a mission to create the most human-verified decentralized network in the world — one where every identity represents a real person, not a bot, whale, or synthetic account. In an era dominated by fake users, manipulation, and centralized gatekeepers, we believe the future belongs to systems that are built by, governed by, and rewarding to real people.

We envision a permissionless global network governed entirely by verified humans — where no bot can mine, no whale can dominate governance, and no fake identity can distort incentives. This is a network where trust, access, and value flow to the people who prove they are real and contribute meaningfully.

More than just identity, InterLink Network aims to become one of the world’s largest AI-Funded Universal Basic Income (UBI) Infrastructures — distributing fair rewards to billions of verified users based on presence, participation, and contribution. Through Human Node mining and decentralized proof-of-personhood, we lay the foundation for an economic system where every real human is recognized and rewarded.
Becoming One of the First Crypto-Native Companies Listed on a U.S. Stock Exchange
Becoming One of the First Crypto-Native Companies Listed on a U.S. Stock Exchange
Our IPO vision

InterLink Labs At New York Stock Exchange
InterLink Labs is on a bold path to become one of the first crypto-native technology companies to list on a major U.S. stock exchange. With our headquarters in Newport Beach, California, and additional offices in Canada, Singapore, and Vietnam, we are building a truly global infrastructure — both in ambition and execution.

Our international footprint reflects the belief that decentralized identity and human-verified networks are not just technological innovations, but global necessities. This strategic presence allows us to scale faster, adapt locally, and reach diverse, underserved populations across continents.

We’ve had the privilege of being interviewed at the New York Stock Exchange (NYSE), a milestone that signals our vision is grounded not only in innovation, but also in institutional credibility. With core breakthroughs in AI, decentralized identity, and proof-of-personhood, InterLink is positioned to become a public company that redefines the standard for trust and compliance in Web3.

A successful IPO will give InterLink Labs the capital, credibility, and global exposure needed to accelerate our mission — rapidly onboarding real users and building the world’s largest decentralized network of one billion verified humans.
Becoming One of the First Crypto-Native Companies Listed on a U.S. Stock Exchange
IPO Preparation
InterLink Labs is rapidly emerging as a global pioneer in AI-powered identity and decentralized human verification. At the heart of our innovation is InterLink ID, a next-generation facial recognition system designed to meet the highest standards in biometric security and Web3 integration.

A recent highlight in our journey is our strategic collaboration with the National Institute of Standards and Technology (NIST), positioning our technology alongside leading global benchmarks set by companies such as Samsung and Meituan. Through partnerships with key players in the facial recognition and AI space, InterLink continues to enhance its verification infrastructure — ensuring unmatched accuracy, security, and global interoperability.

These milestones have captured the attention of institutional partners, global investors, and regulatory experts alike. As part of our path to becoming a publicly listed company, we’ve engaged one of the top U.S. corporate legal advisors in cryptocurrency and capital markets, along with a Big Four auditor to ensure full U.S. GAAP compliance. Simultaneously, we are finalizing our engagement with a top-tier investment bank to serve as underwriter, while analysts assess our role in enabling a decentralized human network at global scale.

Our preparations extend beyond compliance. InterLink’s engineering team is refining algorithm performance under NIST protocols, while our global marketing and product teams are preparing for large-scale rollout and ecosystem adoption.

This momentum is not just technical — it’s strategic. Investors and collaborators see InterLink as a gateway to the future of digital identity, where authentication is frictionless, secure, and built around real human presence. From infrastructure to impact, we are building a globally scalable platform for trust in the age of AI and decentralization.

As InterLink enters its next phase, our vision is clear: to become a global leader in identity and trust infrastructure — serving billions, powered by real people, and ready to meet the demands of tomorrow’s digital world.
Becoming One of the First Crypto-Native Companies Listed on a U.S. Stock Exchange
IPO Roadmap

New York Stock Exchange
🏛 Roadmap to a Successful IPO: InterLink Labs Inc.
Roadmap to a successful Initial Public Offering (IPO) for a technology company like InterLink Labs Inc. involves several critical steps. Below is a comprehensive and structured guide to navigating this process:

1. Assess Readiness
Evaluate InterLink’s current financial position, business model, and market potential.

Ensure sustainable revenue growth or a clearly defined path to profitability. InterLink currently has seven revenue models, providing a strong foundation for long-term sustainability.

2. Engage Advisors
Hire a team of high-caliber U.S.-based advisors, including investment bankers, legal counsel, auditors, and PR experts.

Select reputable underwriters with experience in tech IPOs and the ability to navigate market conditions effectively.

3. Corporate Structure & Governance
Establish a strong corporate governance framework with an experienced board of directors and key committees (audit, compensation, governance).

Review and ensure all shareholder agreements and corporate documents comply with U.S. regulations.

4. Financial Audit
Conduct thorough financial audits based on U.S. GAAP standards.

Prepare at least two to three years of audited financials. For newly established U.S. entities, financial data since incorporation is acceptable.

Recommend engaging a top-tier audit firm — suggested: Ernst & Young (EY).

5. SEC Filing – Form S-1
Prepare and file the S-1 registration statement with the U.S. SEC, including details on InterLink’s business model, financials, risk factors, and use of IPO proceeds.

Be ready to respond to SEC comments and revise filings as needed.

6. Develop a Compelling Investment Story
Craft a clear, engaging narrative highlighting InterLink’s unique value proposition, technological innovation, and growth potential.

Emphasize our competitive advantage in AI, Web3, and decentralized identity infrastructure.

7. Marketing & Roadshow Strategy
Build a comprehensive U.S. and global marketing strategy.

Conduct a pre-IPO roadshow targeting institutional investors, analysts, and strategic partners.

Effectively communicate the investment thesis and long-term vision.

8. Valuation & Pricing Strategy
Collaborate with underwriters to determine an appropriate valuation and share pricing.

Set a price range that attracts investors while securing adequate capital for growth.

9. Communications & PR
Prepare communications for investors, the media, and regulators.

Develop messaging guidelines, press releases, earnings call scripts, and an FAQ.

Proactively manage public and investor relations.

10. Post-IPO Planning
Establish a strong investor relations program.

Ensure compliance with SEC disclosure and reporting obligations.

Prepare for quarterly earnings calls, annual shareholder meetings, and ongoing governance.

11. Market Timing & Execution
Monitor macroeconomic and sector-specific conditions.

Target Spring–Summer 2026 as an ideal window, aligned with expected regulatory easing for crypto businesses.

Note: InterLink Labs Inc. is a U.S. corporate entity, which simplifies regulatory approval compared to entities structured offshore.

12. Strategic Allocation of IPO Proceeds
Clearly define how funds will be used (e.g., expansion, R&D, infrastructure, debt repayment).

Prioritize long-term value creation for shareholders.

Following these steps meticulously will position InterLink Labs for a successful IPO on NYSE or NASDAQ, while maximizing shareholder value and global brand recognition.
Becoming One of the First Crypto-Native Companies Listed on a U.S. Stock Exchange
IPO Goal
Since our inception, our mission was clear: to dismantle the rising tide of bots and

fraudulent accounts that threatened online spaces and eroded trust. By fostering self-
ownership of identity with self-monetization ability, InterLink Labs aimed to cultivate an

expansive network where each participant was verified as a distinct individual which is a
critical component in establishing their ethos of personhood.


As InterLink Labs garnered attention for its pioneering technology, discussions about becoming a publicly traded entity began to intensify within our board meetings. InterLink leadership team has recognized that taking this leap onto a US national exchange could catalyze our mission exponentially. Traditional funding avenues were limited; however, US capital markets offer prospects previously unseen, resources needed not just for scaling operations but also for enhancing credibility across various stakeholders.

A successful public offering in the US could attract global investors who were not only financially motivated but aligned with their commitment to fostering authentic connections online via our Real Human Network. Our InterLink Network would also amplify our voice in navigating regulations around digital identity and decentralization, an area ripe for discussion as governments worldwide grappled with concerns over privacy and security amidst rapid technological advancements.


We envision our IPO day to arrive when InterLink Labs officially debuts on the US stock market market floor. With bell ringing loud against soaring aspirations echoing back through trading floor corridors lined with humanistic depictions exploring what personhood truly is means in the age of digital realities, our IPO launch shall mark both new beginnings for investors ready to participate in this transformative journey alongside dedicated innovators, committed wholeheartedly towards creating humanity’s largest self-owned network, fostered by integrity at its core.
InterLink Mini-App Marketplace: The Evolution Beyond App Store and Google Play
The traditional mobile app marketplaces — Apple’s App Store and Google Play — were revolutionary in the early digital era. However, they have grown into highly centralized systems, burdened by restrictive approvals, high fees, regional limitations, and complex user onboarding processes. In a world that demands openness, speed, and human connection, these outdated models are no longer sufficient.
InterLink introduces the Mini-App Marketplace — a decentralized, human-first evolution of the app store model.


Through seamless integration within the InterLink App, users can instantly access a wide range of Mini-Apps without the need for additional downloads, complex sign-ups, or platform gatekeeping. Developers, in turn, can launch services directly to a global audience of verified real humans, bypassing traditional barriers and fees.

Every interaction in the Mini-App Marketplace is powered by InterLink ID, ensuring that only genuine, verified humans participate, driving trust, quality, and security at unprecedented scale.

This new marketplace is not just an alternative; it is the natural evolution of digital ecosystems — where applications are free from centralized control, where human identity powers access, and where global participation becomes frictionless.

InterLink’s vision is bold: to become the world’s largest decentralized Mini-App network, redefining how digital services are distributed and accessed — and ultimately challenging the dominance of traditional app stores.



Build for humans, not for platforms. Welcome to the Human App Store.
Disclaimer
Notice and Disclaimer
This Notice & Disclaimer applies to the whitepaper, the website at https://interlinklabs.ai/, and all related materials published by InterLink Labs Inc. or its subsidiaries (collectively, “InterLink Labs”). By accessing or using these materials, you agree to be bound by the terms herein.

1. Governing Law and Jurisdiction
This whitepaper and any related materials, communications, or information provided by InterLink Labs (collectively, the "Information") are governed by and construed in accordance with the substantive laws of the United States, without regard to its conflict of law principles. The application of the United Nations Convention on Contracts for the International Sale of Goods is expressly excluded. Any dispute, controversy, or claim arising out of or relating to the Information, or the breach, termination, or invalidity thereof, shall be subject to the exclusive jurisdiction of the competent courts in the State of California, United States.

2. Regulatory Compliance and Risk Factors
The project described herein, including the associated InterLink tokens, may be subject to various legal and regulatory requirements across different jurisdictions. These regulations are complex, evolving, and subject to change without notice. Prospective participants are solely responsible for understanding and complying with all applicable laws and regulations in their respective jurisdictions concerning the purchase, holding, or use of InterLink tokens or participation in any related activities. Participation involves significant risks, including but not limited to, financial loss, regulatory changes, technological failures, and market volatility. Participants acknowledge and assume full responsibility for all risks associated with engaging with the InterLink Network, InterLink tokens, and related products or services.

3. Jurisdiction and Restrictions
The Information is not intended for distribution to, or use by, any person or entity in any jurisdiction or country where such distribution or use would be contrary to local law or regulation, or which would subject InterLink Labs or its affiliates to any registration requirement within such jurisdiction or country. Accessing this Information or participating in any token sale or related activities may be restricted by law in certain jurisdictions. It is the sole responsibility of each user or participant to inform themselves about and observe all applicable legal and regulatory restrictions in their jurisdiction before accessing the Information or engaging in any related transactions.

4. Limitation of Liability and Disclaimer of Warranties
Information Provided 'As Is'

The Information is provided on an "as is" and "as available" basis, without any warranties or representations of any kind, whether express, implied, statutory, or otherwise. This includes, but is not limited to, warranties of accuracy, completeness, reliability, timeliness, merchantability, fitness for a particular purpose, title, or non-infringement. InterLink Labs makes no representations, warranties, or covenants regarding the technical properties, performance, security, or suitability of the InterLink Network, InterLink tokens, or any associated technology. Users acknowledge and accept the inherent risk that the Information may be incomplete, inaccurate, outdated, or unsuitable for their specific needs or purposes.


Disclaimer of Liability

To the maximum extent permitted by applicable law, neither InterLink Labs, its affiliates, directors, officers, employees, agents, network participants, token distributors, service providers, nor any information providers (collectively, the "InterLink Parties") shall be liable for any direct, indirect, incidental, special, consequential, punitive, or exemplary damages, including but not limited to, damages for loss of profits, revenue, data, goodwill, or other intangible losses, or damages resulting from computer viruses, system failures, or malfunctions, arising out of or in connection with:


(a) Access to, use of, or inability to access or use the Information, the whitepaper, the website, or any related materials;
(b) Reliance on any Information presented;
(c) Any errors, omissions, or inaccuracies in the Information;
(d) The performance or non-performance of the InterLink Network or InterLink tokens;
(e) Any participation in token sales or related activities.


This limitation of liability applies regardless of the legal theory upon which the claim is based, whether contract, tort (including negligence), strict liability, or otherwise, even if the InterLink Parties have been advised of the possibility of such damages. This limitation does not seek to exclude or limit liability for death or personal injury caused by negligence, fraud, or willful default, or any other liability which cannot be excluded or limited under applicable law.
Disclaimer
Crypto Products
1. General Disclaimer

The InterLink tokens and any related products or services offered by InterLink Labs are based on nascent blockchain technology. The field of digital assets, cryptocurrencies, and blockchain is rapidly evolving, characterized by significant technological, regulatory, and market uncertainties. Users should be aware that engaging with crypto products involves substantial risks, including but not limited to, volatility in value, potential loss of principal, cybersecurity threats (such as hacking, malware, and phishing), operational failures, and changes in the regulatory landscape that could adversely affect the utility, transferability, or legality of such assets.

2. No Guarantee of Utility or Value

InterLink Labs makes no representations or warranties regarding the future utility, functionality, or value of InterLink tokens or the InterLink Network. The development roadmap and projected features are subject to change based on technical challenges, strategic decisions, or unforeseen circumstances. There is no guarantee that the tokens will achieve or maintain any particular market value or that they will be listed or tradable on any exchange. The value of crypto assets can be extremely volatile and may decrease significantly or become worthless.


3. User Responsibility

Users are solely responsible for conducting their due diligence, understanding the risks involved, and making informed decisions regarding the acquisition, holding, or use of InterLink tokens and related products. Users should possess sufficient technical knowledge to understand the nature and risks of cryptographic tokens and blockchain-based systems. It is recommended that users seek independent professional advice (financial, legal, tax) before engaging with any crypto products offered by InterLink Labs.
Nature of the Whitepaper
1. Informational Purposes Only

This whitepaper is provided for informational purposes only and does not constitute a prospectus, offering document, solicitation, or offer of any sort. The information contained herein is intended to provide a general overview of the InterLink Labs project, its vision, technology, and the proposed utility of the InterLink tokens within the ecosystem. It should not be interpreted as a recommendation or endorsement to purchase, sell, or hold InterLink tokens or any other digital asset.


2. No Offer of Securities or Investment Advice

The Information presented in this whitepaper does not constitute an offer to sell, or a solicitation of an offer to buy, any security, financial instrument, investment product, or investment vehicle, including but not limited to InterLink tokens. The InterLink tokens are intended to function as utility tokens within the InterLink Network and are not designed or marketed as securities, shares, equities, or any form of investment contract. Nothing contained in this whitepaper should be construed as legal, financial, business, investment, or tax advice. Potential participants are strongly urged to consult with their own independent professional advisors (legal, financial, tax, technical, etc.) to assess the suitability and risks associated with the project and InterLink tokens before making any decisions or engaging in any related activities. InterLink Labs, its network participants, token distributors, and service providers expressly disclaim any liability for any direct or indirect damages or losses arising from accessing, relying upon, or using the information contained in this whitepaper, the associated website, or any related materials.


3. Forward-Looking Statements

This whitepaper may contain forward-looking statements, projections, estimates, and forecasts based on assumptions, expectations, and beliefs of the InterLink Labs team as of the date of publication. These statements often include words such as "aims," "anticipates," "believes," "estimates," "expects," "intends," "may," "plans," "projects," "should," "will," or similar expressions. Forward-looking statements involve inherent risks and uncertainties, both known and unknown, and are subject to change due to various factors, including technological developments, market conditions, regulatory changes, and strategic decisions. Actual results, performance, or achievements of the InterLink Labs project or the InterLink Network may differ materially from those expressed or implied in these forward-looking statements. Any information containing historical data or analysis should not be taken as an indication or guarantee of future performance, and past results do not necessarily predict future outcomes. Plans, roadmaps, objectives, or numerical estimations outlined in this whitepaper are preliminary, subject to change without notice, and are not guaranteed. InterLink Labs reserves the right to modify, amend, delete, or restrict access to any content within this whitepaper or its associated website, or to discontinue its distribution, at its sole discretion and without prior notice.
Token Features
1. Utility Focus

The InterLink token is designed primarily as a utility token intended to facilitate access to and interaction with the InterLink Network and its associated services. Its features, functionalities, and potential uses described in this whitepaper or other project materials are based on the current design and development plans. These features are intended to support the ecosystem's operation and growth but are not guaranteed to be implemented exactly as described or to remain unchanged.


2. No Investment Value or Rights

Possession of InterLink tokens does not grant holders any equity, ownership, voting rights, profit-sharing, dividends, or any other form of financial return or governance rights in InterLink Labs or its affiliates, unless explicitly stated otherwise in separate, legally binding documentation. The tokens do not represent any claim on the assets or revenues of the company. Their value, if any, is intended to derive solely from their utility within the InterLink Network.


3. Subject to Change

The specific features, functionalities, and technical specifications of the InterLink tokens and the InterLink Network are under continuous development and are subject to modification, enhancement, or even removal at the sole discretion of InterLink Labs. Factors such as technological advancements, market feedback, regulatory considerations, and strategic pivots may necessitate changes to the token's design or utility. InterLink Labs provides no assurance that the features described will be fully realized or maintained in the future.
Third-Party Content
1. Links and References

This whitepaper, the InterLink Labs website, or other related materials may contain links or references to third-party websites, resources, content, or services that are not owned or controlled by InterLink Labs. These links are provided solely for convenience and informational purposes. InterLink Labs does not endorse, approve, guarantee, or assume responsibility for any such third-party content, products, or services.


2. No Endorsement or Liability

Accessing and using third-party websites or resources is done at the user's own risk. InterLink Labs is not responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any content, goods, or services available on or through any such third-party websites or resources. Users should review the terms of use and privacy policies of any third-party sites they visit.


3. Independence of Third Parties

Any mention of third-party companies, projects, or technologies within the Information does not imply any partnership, joint venture, endorsement, or affiliation between InterLink Labs and such third parties, unless explicitly stated otherwise. InterLink Labs operates independently, and references to external entities are purely for illustrative or comparative purposes.
Copyright
1. Intellectual Property Rights

All content contained in this whitepaper, the InterLink Labs website, and any related materials, including but not limited to text, graphics, logos, icons, images, audio clips, digital downloads, data compilations, and software, is the property of InterLink Labs or its content suppliers and is protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.


2. Limited License

InterLink Labs grants users a limited, non-exclusive, non-transferable, revocable license to access and use the Information for personal, non-commercial purposes only. This license does not include any right to:

Modify, reproduce, distribute, publish, license, create derivative works from, transfer, or sell any Information, software, products, or services obtained from the whitepaper or related materials;

Use the Information for any commercial purpose;

Remove any copyright, trademark, or other proprietary notices from the Information;

Frame or mirror any portion of the Information on any other server or wireless or Internet-based device.

3. Reservation of Rights

All rights not expressly granted herein are reserved by InterLink Labs. Any use of the Information not expressly permitted by these terms is a breach of these terms and may violate copyright, trademark, and other applicable laws. The license granted under this section will automatically terminate if you violate any of these restrictions, and may be terminated by InterLink Labs at any time.


4. Trademarks

The InterLink Labs name, logo, and all related names, logos, product and service names, designs, and slogans are trademarks of InterLink Labs or its affiliates. You may not use such marks without the prior written permission of InterLink Labs. All other names, brands, and marks are used for identification purposes only and may be the trademarks of their respective owners.

Database 4
Introducing InterLink Coach House
It serves as a private space where growth, strategy, and leadership come together to guide the next generation of community builders.

The InterLink Coach House is the official leadership and mentorship hub for the InterLink Network. It is open to all Linkers who aspire to become Ambassadors, serving as the gateway from applicant to leader.

It replaces the old Ambassador Onboarding Program (T1, T2, T3) with a stronger, more transparent system that combines training, accountability, and direct mentorship.

Inside the Interlink Coach House:

Every Linker who wishes to become an Ambassador must first join the InterLink Coach House Onboarding.

Members report directly to the Global Partners (Coaches), who serve as mentors and evaluators.

The Coaches assess each applicant and decide if they qualify for Tier 3, Tier 2, or Tier 1 based on performance, referrals, and commitment.

Global Partners report daily to the Core Team, ensuring transparency and alignment with InterLink’s global vision.

Members gain exclusive access to training materials, strategies, leadership workshops, and growth systems.

The House fosters teamwork, creativity, and measurable impact through structured activities and accountability programs.

Security & Quality Controls
To maintain the integrity of the onboarding process:

An Anti-Raid system is active: if more than 15 people join within 15 minutes, further joins will be temporarily blocked. Those already in the group remain unaffected. This prevents spammers and unprofessional messages.

A 10-second slow mode is enforced to ensure that each member’s questions are properly addressed and everyone receives guidance without messages getting lost.

The Coach House is more than just a group—it is the proving ground for future leaders of Web3. Here, Linkers are trained, guided, and elevated to become Ambassadors who carry the InterLink vision forward.

Introducing the InterLink Coach House: where Linkers begin their journey, Ambassadors are made, and leaders are born.

📜 InterLink Coach House White Paper Version 1.0 — August 2025
House Rules on How to Become an Ambassador & Grow into a Better One

📑 InterLink Coach House White Paper v1.0 Content Sumarry
Instructions for Readers
Purpose of the White Paper

How to use the document

Official links 

Transition note (closing of old groups)

Introduction
What is the InterLink Coach House?

Why it was created

Who it is for (Ambassadors, Applicants, Global Partners)

The role of the House in the InterLink ecosystem

Core Vision & Mission
Vision of the Coach House

Mission: training, leadership, transparency, fairness

Long-term goals (building a global Ambassador force)

Official Links & Transition
Onboarding Group link

Internal House link

Migration process from old groups

Official closure of old groups

Structure of the Coach House
Onboarding & Orientation steps

Evaluation factors (referrals, social presence, content creation, commitment)

Tier System (Tier 3 → Tier 2 → Tier 1 →  Global Partner → Core Team)

Core qualities required

Training Ground & House Operations
Training workshops & mentorship

Bot engagement (daily & monthly tasks)

Performance tracking

Role of coaches in guiding new Ambassadors

Global Partners Reward Scheme
Allocation of ITLG to Coaches

Distribution percentages (20% to members Level 100+)

Example calculation (40,000 ÷ 20 = 2,000 ITLG each)

Beneficiaries (Ambassadors + Ordinary Linkers)

Ambassador Monthly Reward System (InterLink Labs Program)
Content Creation Points (CCP) system

Bonus Points for high-performing content

Tier thresholds and Commission Bonuses

Snapshot and distribution dates (7-day, 23rd cutoff)

Anti-cheat and disqualification rules

The Bot Mechanism
Leveling system explained

How XP is earned

Reward unlock milestones (e.g., Level 100+)

Transparency logs

Events & Community Engagement
Referral campaigns

Content challenges

Ambassador competitions

Event-based reward allocations

Transparency & Accountability
Transaction reporting (monthly)

Coach accountability to members

Fairness & trust policies

Interlink Coach House Message
The Coach House as the backbone of InterLink Ambassadors

Call to unity, loyalty, and growth

Future outlook for InterLink’s Ambassador program

Motto: “Together, we build. Together, we lead. Together, we InterLink.”
Instructions for Readers
House Rules on How to Become an Ambassador & Grow into a Better One

Welcome to the InterLink Coach House.
This White Paper is more than just a guide—it is your roadmap to leadership, growth, and rewards within the InterLink ecosystem. Whether you are a new applicant, an active Ambassador, or a Global Partner, this document will help you understand your role, your responsibilities, and the opportunities ahead.

Purpose of This White Paper
The InterLink Coach House was created to unite Ambassadors and applicants under one vision and one structure. Here, you will find:

The principles that guide our community.

The reward systems that recognize loyalty and hard work.

The training process that shapes leaders for tomorrow.

By reading this carefully, you will learn how to rise, qualify, and maximize your potential as part of InterLink.

How to Use This Document
Read from start to finish. Each page builds upon the last, giving you a complete picture of the InterLink Coach House.

Identify your role.

Applicants should focus on Onboarding and Qualification.

Ambassadors should study both the Coach House Reward Scheme and the Ambassador Monthly Reward System.

Global Partners should pay attention to the allocation and distribution rules.

Respect the policies. Fairness, loyalty, and unity are at the heart of InterLink. Misconduct, manipulation, or cheating will never be tolerated.

Transition Note
As we move forward into a new era, all old groups will be closed once migration is complete. The InterLink Coach House will serve as the only official hub for Ambassadors and applicants. This ensures unity, clarity, and one family moving in the same direction.


This White Paper is not just a set of rules—it is a commitment to growth, fairness, and leadership. By being here, you are not only joining a group; you are stepping into a movement that is shaping the future of InterLink worldwide.

Together, we rise. Together, we lead. Together, we InterLink.
Introduction
House Rules on How to Become an Ambassador & Grow into a Better One

The InterLink Coach House is the official training ground and central hub for all InterLink Ambassadors and aspiring candidates. It was created to bring structure, clarity, and unity to the Ambassador Program, ensuring that every member understands the path to leadership and the opportunities available within the InterLink ecosystem.

The Coach House serves three primary purposes:

For Applicants (Linkers seeking to become Ambassadors):

A place to begin the journey through orientation, evaluation, and mentorship.

Candidates are assessed based on referrals, content creation, and commitment.

Only those who show loyalty, consistency, and potential are invited to enter the Internal House.

For Official Ambassadors:

A professional environment where Ambassadors can grow, collaborate, and take on greater responsibilities.

Access to training, daily and monthly tasks, reward distribution, and transparent reporting.

A platform to showcase leadership and qualify for higher tiers in the program.

For Global Partners and Coaches:

A leadership base where Global Partners can directly mentor Ambassadors.

Provides an accountability framework for allocation and distribution of ITLG rewards.

Ensures fairness and transparency in how the community is nurtured.

The establishment of the InterLink Coach House marks the beginning of a new era for Ambassadors. All old groups will be closed once migration is complete, ensuring that every member is aligned under one official system. This guarantees unity, prevents fragmentation, and creates a clear path for growth.

In essence, the Coach House is not only a group—it is the backbone of InterLink leadership. It is where applicants transform into Ambassadors, and Ambassadors evolve into global leaders.
Core Vision & Mission
House Rules on How to Become an Ambassador & Grow into a Better One

Our Vision
The InterLink Coach House envisions a united global community of Ambassadors who lead with integrity, inspire through action, and expand the InterLink Network across borders.
We strive to build a structure where every effort is recognized, every achievement is rewarded, and every Ambassador becomes a pillar of influence and growth in their region.

Our ultimate goal is to transform ordinary Linkers into extraordinary leaders, setting the foundation for InterLink to thrive as the world’s most trusted decentralized social network.

Our Mission
The mission of the InterLink Coach House is threefold:

Empower Ambassadors

Provide a professional training ground where applicants can learn, adapt, and demonstrate their potential.

Equip Ambassadors with the tools, knowledge, and strategies to effectively expand the InterLink community.

Maintain Integrity & Transparency

Operate under a system of fairness and accountability.

Ensure that all rewards, promotions, and recognitions are based on merit, loyalty, and performance.

Guarantee transparent allocation of ITLG rewards to both Ambassadors and House members.

Drive Global Growth

Encourage Ambassadors to spread InterLink through authentic content creation, referrals, and community leadership.

Build a network where each Ambassador not only represents InterLink but also carries its values into their communities.

Establish a long-term ecosystem that rewards consistency, creativity, and true commitment.

The Core Vision and Mission of the InterLink Coach House ensure that we are not just building a program—we are shaping leaders who will guide InterLink into its global future.
InterLink Official Links & Transition Framework
House Rules on How to Become an Ambassador & Grow into a Better One

1. Purpose of the Document
This document provides the official communication channels of the InterLink Network and outlines the transition process from the previous ambassador groups into the newly structured InterLink Coach House. It serves as a reference for ambassadors, applicants, and partners to ensure clarity, avoid misinformation, and support a smooth migration.

2. Official Communication Links
2.1 Main Channel
InterLink Labs: https://linkvault.interlinklabs.ai/

2.2 Regional Channels ( Handled by Ambassador, not internal team )
Turkey: https://x.com/interlinklabstr

Philippines: https://x.com/interlinklabsph

Vietnam: https://x.com/interlinklabsvn

Indonesia: https://x.com/interlinklabsid

China: https://x.com/interlinklabscn

India: https://x.com/interlinklabsas

Nigeria: https://x.com/interlinklabsng

Pakistan: https://x.com/interlinklabspk

Ethiopia: https://x.com/InterlinkLabEth

Korea: https://x.com/interlinkkorea

USA: https://x.com/interlinklabusa

3. Transition to InterLink Coach House
The establishment of the InterLink Coach House represents a structural upgrade for ambassadors and community members. All ambassador activities, coordination, and communication will be consolidated within the new framework.

3.1 New Official Links
Onboarding Group: https://t.me/Interlink_Coach_House

Internal House Link: https://t.me/+Sbsm0mav9IVlOTZl

3.2 Key Objectives of Migration
Centralization: Consolidating all ambassador-related activities in one unified structure.

Transparency: Ensuring clear communication and accountability across ambassador levels.

Efficiency: Streamlining onboarding, training, and community engagement.

4. Closure of Old Groups
The following groups represent the previous ambassador structure and will be phased out upon full migration to the Coach House:

Onboarding Group (Old): https://t.me/InterlinkAmbassador

Tier 1: https://t.me/+UFRaIvpLpso2MWFl

Tier 2: https://t.me/+Yb9bEqeb2oliMDRl

Tier 3: https://t.me/+OSIL4eYERNlhMmZl

Closure Timeline:

Transition into the InterLink Coach House is effective immediately.

Old Tier groups will remain accessible for a limited time during the migration phase.

Once the migration is complete, old groups will be officially closed and archived.

The transition to the InterLink Coach House marks a significant step forward in strengthening the ambassador program and creating a structured, transparent, and scalable ecosystem for community growth. Ambassadors and applicants are encouraged to join the new links without delay to ensure continued participation in official activities.
Structure of the Coach House
House Rules on How to Become an Ambassador & Grow into a Better One

InterLink Ambassador Structures: Transition from Old to New
1. Old Ambassador Structure (Legacy System)
The old InterLink Ambassador framework was based on a three-tier hierarchy. Each tier reflected the member’s influence, responsibilities, and recognition within the ecosystem.

Tier 3 (T3) – Influencer
Entry point into the Ambassador program.

Primarily focused on content sharing, visibility, and brand influence.

Role: Drive online awareness through social platforms.

Tier 2 (T2) – Community Builder
Elevated role after demonstrating consistency.

Responsibilities included community moderation, local engagement, and grassroots events.

Role: Build and maintain healthy community spaces online and offline.

Tier 1 (T1) – Global Leader
The highest level in the old ambassador system.

Represented InterLink on a global scale, often coordinating across multiple regions.

Responsibilities included strategic leadership, training lower tiers, and representing InterLink in external initiatives.

Limitations of the Old Structure:

No formal stage for applicants before becoming T3.

Growth path stopped at T1, leaving no higher-level mentorship layer.

Ambassadors had responsibilities but lacked centralized oversight and transparent allocation processes.

2. New InterLink Coach House Structure (Upgraded System)
The new InterLink Coach House introduces a tiered ecosystem that begins with applicants and extends to global leadership. It ensures every participant has a clear path for growth, responsibilities, and mentorship.

Linkers (Applicants)
Entry point into the House.

Join the Onboarding Group where referrals, activity, and contributions are evaluated.

Only those who demonstrate commitment progress to T3.

Tier 3 (T3) – Influencer
Equivalent to “Influencers” in the old structure.

Responsible for content creation, sharing, and boosting online visibility.

Focus: learning discipline and building influence.

Tier 2 (T2) – Community Builder
Equivalent to “Community Builders” in the old structure.

Engage in group moderation, local activities, and event support.

Focus: community growth and leadership development.

Tier 1 (T1) – Global Leader
Equivalent to “Global Leaders” in the old structure.

Lead larger communities, mentor lower tiers, and coordinate strategic initiatives.

Focus: leadership, accountability, and representation.

Global Partners (Coaches)
Coach Joel and Coach Luke serve as primary mentors and overseers.

Guide Ambassadors, manage allocations, and ensure transparency in ITLG reward distribution.

Act as bridges between Ambassadors and the Core Team.

Core Team
The highest governing body of the House.

Responsible for strategy, ecosystem development, and long-term sustainability.

Works with Global Partners to scale leadership and global impact.

3. Key Differences: Old vs New
Aspect
Old Structure
New Coach House Structure
Entry Point

Direct entry at T3 (Influencer)

Linkers stage before T3

T3 Role

Influencer

Entry-level Ambassadors (influence + learning)

T2 Role

Community Builder

Community growth, leadership development

T1 Role

Global Leader

Senior Ambassadors, mentoring + accountability

Above T1

None

Global Partners (Coaches) + Core Team

Transparency

Limited

Formalized with allocation history shared in House

Growth Path

Stopped at T1

Extended to Global Partners & Core Team

The old system established the foundation for influence, community building, and leadership through T3–T2–T1 roles. However, it lacked an applicant stage and higher-level oversight.

The new Coach House structure expands this framework by introducing Linkers (entry applicants) and elevating leadership with Global Partners and the Core Team. This ensures a complete growth journey:

From Linker → Influencer → Community Builder → Global Leader → Global Partner → Core Team.

This new structure makes leadership progression transparent, intentional, and sustainable for long-term ecosystem growth.
Onboarding Process & Qualification
House Rules on How to Become an Ambassador & Grow into a Better One

The InterLink Coach House follows a structured onboarding process to ensure that only the most committed and capable individuals qualify as Ambassadors. This process is designed to evaluate applicants fairly and place them in the correct tier for growth and contribution.

Step 1: Enter the Onboarding Group
All applicants (Linkers) must first join the Onboarding Group.

Here, Coaches and senior Ambassadors will evaluate their referrals, community presence, and social activity.

This stage acts as the training ground where potential is tested before advancement.

Step 2: Evaluation Criteria
We evaluate each candidate based on several factors:

Network Growth – Ability to bring in new, quality members into the ecosystem.

Content Creation – Effectiveness in spreading InterLink through original and impactful content.

Commitment Level – Demonstrated consistency, loyalty, and genuine interest in InterLink.

Community Presence – Positive engagement both online and offline.

Step 3: Placement into Tiers
After evaluation, qualified applicants are placed into the Ambassador tiers:

Tier 3 Ambassadors – Entry point for new Ambassadors.

Tier 2 Ambassadors – For outstanding candidates who display strong potential.

Tier 1 Ambassadors – Earned through careful observation and consistent performance over time.

Step 4: Entry into the Internal House
Once promoted, Ambassadors are given access to the Internal House.

This is the official hub for:

Training & mentorship

Task assignments (daily/monthly)

Reward distribution and announcements

Direct communication with Coaches

Evaluation & Tier Assignment
The process of assigning ambassadors to the correct tier will be handled with fairness, transparency, and accountability.

The process is as follows:

Candidates will reach out to either Coach Joel or Coach Luke, regardless on which country they come from.

Global Partners / Evaluators will carefully evaluate their performance, activities, and potential.

At the end of each day, Global Partners will send to the Core Team the evaluated list of candidates.

The Core Team will then update the official list and assign their badges in the InterLink App.

Authority of Assignment:

Applicants or Linkers together with Tier 3, and Tier 2: Global Partners have full authority to decide and assign candidates.

Tier 1 (Global Leader): Decisions for Tier 1 will always be discussed and finalized together with the Global Partners and The Core Team to ensure strong leadership alignment.

This ensures that every candidate is placed where they can thrive, grow, and contribute most effectively to InterLink’s mission.

Important Note

If country does not have Global Leader, even Community Partner, Global Partners will be the one who directly lead Tier 3.
Once the onboarding process is complete and all applicants are moved, old groups will be permanently closed to ensure all official activities are centralized in the InterLink Coach House.

Qualification as an Ambassador is not just about joining—it is about proving readiness to lead, contribute, and uphold the values of InterLink.
👨‍👨‍👧‍👧
New Team Management Structure
House Rules on How to Become an Ambassador & Grow into a Better One

Leadership & Team Structure
Country- and Team-Based Management

Starting from Month 4 (August 24, 2025), InterLink implements a new leadership and team management structure. This system ensures that Ambassadors across all countries are guided by a clear chain of leadership, accountability, and mentorship.

The vision is simple:
👉 Every Ambassador must not only grow the community but also develop into a strong leader capable of operating independently with confidence and resilience.

🔱 Core Team – The Highest Authority
The Core Team is the highest decision-making body within InterLink. This group carries the ultimate authority and responsibility for the growth, sustainability, and governance of the entire ecosystem.

Core Responsibilities:

Vision & Strategy – Define the global roadmap for InterLink’s ecosystem and Ambassador Program.

Governance & Integrity – Ensure fairness, transparency, and compliance across all operations.

Final Decision-Making – Approve major policies, tokenomics updates, partnerships, and expansions.

Empowering GPs – Delegate responsibility to Global Partners, equipping them to execute strategy worldwide.

Guardian of Values – Preserve InterLink’s mission of decentralization, empowerment, and community-driven growth.

Current InterLink Core Team


Reina | InterLink Labs

Telegram: @reina_interlinklabs

Social Channels
X (Twitter): @reina_itl

💡 The Core Team operates as the ultimate guardians of InterLink, ensuring long-term stability, adaptability, and credibility in the market.

🌐 Global Partners (GP) – The Highest Ambassador Rank
Below the Core Team are the Global Partners (GPs), the most senior leaders in the Ambassador Program. They are the bridge between the Core Team and all global Ambassadors.

Roles of Global Partners:

Strategic Leadership – Expand and strengthen the Ambassador Program globally.

Mentorship – Train and empower Global Leaders (Tier 1) and beyond.

Execution – Translate Core Team strategies into practical community growth.

Communication – Serve as the main link between Ambassadors and the Core Team.

Guardianship – Uphold InterLink’s standards, especially under market volatility or external pressure.

Current InterLink Global Partners


InterLink ID: 950150519

Telegram: @C_Interlinklabs 

Social Channels
X (Twitter): @C_Interlinklabs
Personal X: Joel Nakamoto
YouTube: Coach Joel – InterLink Labs GitHub: coachjoelinterlinklabs
Medium: @coach.joel
TikTok: x @cjnakamoto
Facebook: Joel.Nakamoto
Discord: coachjoelinterlinklabs
Telegram: @Joel_Nakamoto
Trading View: Coach_Joel_Interlinklabs



InterLink ID: 23783

Telegram: @luke237

Social Channels
X (Twitter): @TheManofLord
TikTok 1: @nextgens
TikTok 2: @nextgens2
TikTok (English Channel): @nextgensvn
YouTube: @nextgens
Telegram: @luke237
Facebook: https://www.facebook.com/luke.dao.18
Website: www.nextgens.blog

🥇 Tier 1 – Global Leader
Role: National leaders with full responsibility for their country’s Ambassador program.

Key Duties:

Own and manage national InterLink communities.

Operate official community social channels (Telegram, Discord, X, TikTok, YouTube).

Host large-scale events: AMAs, workshops, offline meetups.

Demonstrate integrity and discipline to inspire Ambassadors.

Build cross-project partnerships to accelerate growth.

Lead and mentor Tier 2 and Tier 3 members.

🥈 Tier 2 – Community Builder
Role: Mid-level leaders responsible for daily community growth and content.

Key Duties:

Create engaging, authentic, and shareable content.

Maintain consistent activity in Telegram, Discord, and social platforms.

Collect feedback from members and report to Tier 1 or GP leaders.

Mentor Tier 3 Influencers and convert awareness into measurable results.

Support event organization and digital campaigns.

🥉 Tier 3 – Influencer
Role: Entry-level ambassadors focused on visibility and awareness.

Key Duties:

Create awareness-driven content (memes, videos, posts, reels).

Promote InterLink’s mission to new audiences.

Support Tier 2 builders with community presence.

Help increase referrals and awareness through creativity and social activity.

🎁 Rewards System
InterLink Ambassadors earn multi-layered rewards that combine recognition, financial incentives, and exclusive opportunities.

Revenue Sharing with top leaders.

Referral Rewards via InterLink IDs.

Monthly Rewards in ITLG and USDT based on performance.

Performance Bonuses for MVP contributors.

MVP Leaderboard Rewards (USDT + ITLG).

Business Trip Sponsorships – to InterLink HQ (Newport Beach, USA) and NYSE.

Event Budget Support (online and offline).

Exclusive NFTs & Merchandise.

Daily Task Rewards for consistent excellence.

Early Access to ecosystem updates and launches.

✅ With this structure, the pathway is clear:
Tier 3 → Tier 2 → Tier 1 → GP → Core Team


Every Ambassador has the opportunity to grow, lead, and eventually contribute to shaping InterLink at the highest levels.
Global Partners Reward Scheme
House Rules on How to Become an Ambassador & Grow into a Better One

The Global Partners Program is a recognition and reward system designed for outstanding leaders who have consistently demonstrated loyalty, growth, and long-term commitment to the InterLink ecosystem. Unlike the Ambassador Rewards (which focus on content creation, referrals, and activity), the Global Partners Reward Scheme is built on partnership, leadership, and ecosystem impact.

1. Purpose of the Reward Scheme
To recognize top leaders who contribute to the long-term success of InterLink.

To ensure that Global Partners share in the growth of the InterLink ecosystem.

To maintain motivation, stability, and alignment among high-level leaders.

2. Reward Allocation
Coaches (Global Partners): Each Global Partner (e.g., Coach Joel & Coach Luke) receives a fixed allocation of 100,000 ITLG per cycle.

Ambassador Incentive Pool: A portion of the Coach allocations (20% = 40,000 ITLG) is redistributed to reward active and high-level Ambassadors.

Distribution Mechanism:

If 20 Ambassadors qualify (reaching Level 100+), then 40,000 ITLG ÷ 20 = 2,000 ITLG per Ambassador.

If fewer Ambassadors qualify, each receives a higher share of the 40,000 ITLG pool.

3. Halving Rewards & Market Volatility Adjustments
Halving Policy: Rewards may undergo scheduled halving events to ensure token sustainability, similar to Bitcoin’s model.

Market Adjustment Rule: If the price of ITLG increases significantly, rewards may be adjusted downward (halved or reduced) to maintain long-term balance.

Conversely, if the price of ITLG drops, allocations may be temporarily adjusted upward to ensure fair compensation and motivation.

All changes will be announced officially and reflected in the next White Paper update.

4. Transparency & Accountability
All transactions and reward allocations are recorded and shared internally within the Coach House for reference.

Coaches are responsible for transparent distribution of the rewards to ensure fairness.

Any misconduct in allocation or favoritism will result in penalties and restructuring.

5. Key Features of the Scheme
Merit-Based Rewards: Only Ambassadors who meet requirements (e.g., reaching Level 100+) share in the redistribution pool.

Sustainability: Designed to ensure continuous motivation while maintaining fair compensation for Global Partners.

Leadership Incentive: Encourages Global Partners to mentor and grow their Ambassadors since their rewards are linked to performance.

Market Flexibility: The halving & adjustment model ensures the ecosystem adapts to token price volatility.

6. Long-Term Impact
Strengthened leadership bonds between Global Partners and Ambassadors.

Greater transparency in the reward system.

Clear pathways for Ambassadors to eventually reach Global Partner status through loyalty, leadership, and performance.

The Global Partners Reward Scheme is not just about tokens—it is about building trust, loyalty, and long-term sustainability within the InterLink ecosystem.
Reward & Allocation System
House Rules on How to Become an Ambassador & Grow into a Better One

The InterLink Coach House operates under a transparent and merit-based reward system designed to motivate performance, recognize effort, and ensure fair distribution of ITLG.

1. Coaches’ Allocation
Each Coach (e.g., Coach Joel and Coach Luke) receives a fixed allocation of ITLG from the InterLink Labs pool.

Example:

Coach Joel → 100,000 ITLG

Coach Luke → 100,000 ITLG

This allocation serves as the foundation for reward distribution within the House.

2. House Member Rewards
From each Coach’s allocation, 20% is reserved for qualified House Members who meet the performance requirements.

Example:

100,000 ITLG allocation → 20% = 20,000 ITLG set aside.

If 20 members qualify (reaching level 100+ in the bot system), the 20,000 ITLG is divided equally:

20,000 ÷ 20 = 1,000 ITLG per member.

This ensures that rewards are both fair and performance-driven.

3. Ambassador vs. Ordinary Linker Rewards
Ambassadors → Eligible for both direct allocation rewards (from the House pool) and performance-based rewards (from the Ambassador program).

Ordinary Linkers → Can qualify for small incentives but do not receive full Ambassador rewards until officially onboarded.

This structure ensures that true Ambassadors are rewarded more heavily while giving Linkers motivation to progress.

4. Transparency & Distribution
All distributions are recorded and tracked via the bot system to avoid disputes.

Coaches commit to sharing transaction history within the Internal House, ensuring transparency among members.

Rewards are distributed within 7 days after cut-off to all qualified recipients.

5. Special Events & Bonuses
During special campaigns or events, additional allocations may be distributed.

These are decided jointly by Coaches and InterLink Labs, ensuring that active contributors receive extra recognition.

In summary:

Coaches receive allocations → Reserve 20% for House Members.

Rewards are distributed fairly and transparently via the bot rank system.

Only qualified Ambassadors and active members benefit from the full reward system.
InterLink Ambassadors Reward System
House Rules on How to Become an Ambassador & Grow into a Better One

The Ambassador Monthly Reward System is designed to reward effort, creativity, and community growth. It measures both quantity and quality of contributions while ensuring fairness through strict anti-cheat rules.

This system applies to all official InterLink Ambassadors and is separate from the Global Partner reward scheme.

1. Core Principles
Effort = Reward: Ambassadors earn rewards based on their activity, creativity, and outreach.

Fair Play: Quality is valued over quantity, and cheating is strictly prohibited.

Tier-Based Growth: Rewards scale based on your Ambassador Tier (1, 2, or 3).

2. How It Works
Ambassadors accumulate Content Creation Points (CCP) and Bonus Points (BP) through approved activities.

Content Creation Points (CCP) → Awarded for each eligible piece of content submitted.

Bonus Points (BP) → Given for high-performing content or special campaigns.

Your Total Points = CCP + BP.
Points are snapshotted weekly (every 7 days) and finalized on the 23rd of each month. Rewards are distributed within the following 7 days.

3. Reward Tiers & Milestones
Each Tier has unique point thresholds and commission bonuses:

Tier 3 Ambassadors

Entry level.

Eligible for basic ITLG rewards upon reaching milestones.

Tier 2 Ambassadors

Mid-level.

Unlock higher ITLG rewards + commission bonus (percentage of monthly referral rewards).

Tier 1 Ambassadors

Top level.

Access to maximum ITLG rewards, commission bonuses, and eligibility for special campaigns.

4. Example Reward Flow
Ambassador creates content across social media.

Each post earns Content Creation Points.

High-performing content (viral reach, strong engagement) earns Bonus Points.

At month-end, total points are tallied.

Rewards = ITLG tokens + Commission Bonus (based on referral earnings).

5. Anti-Cheat & Disqualification Policy 🚫
To preserve fairness, the following rules apply:

❌ Reposting or stealing content (from Ambassadors or official InterLink accounts)
→ Immediate disqualification or demotion; points reset to 0.

❌ Reusing identical content repeatedly across platforms
→ Only the first version is counted; duplicates are rejected.

❌ Low-effort videos (static slideshows, no editing, no audio, or stretched content)
→ Counted as an image post or may result in point deduction if repeated.

❌ Engagement manipulation (fake likes, bot traffic, buying views, etc.)
→ Zero tolerance → permanent ban from tasks + rewards disqualification.

6. Why This Matters
This reward system ensures that authentic creativity, consistent effort, and true loyalty are recognized. Ambassadors who actively build InterLink’s presence not only earn ITLG rewards but also contribute to the long-term success of the ecosystem.

In conclusion:
By combining content creation, referrals, and consistency, Ambassadors can unlock significant monthly ITLG rewards + commissions while growing their influence in the InterLink community.
🗓️
Introducing the InterLink Ambassador Monthly Reward System
House Rules on How to Become an Ambassador & Grow into a Better One

This reward system is designed to track both the quantity and quality of content created by Ambassadors.
Every piece of content you submit will earn a certain number of points (Content Creation Points). High-performing content may receive additional bonus points based on specific criteria (Bonus Points).

Your total points will be accumulated over time, and once you reach certain milestones, you’ll unlock a corresponding amount of ITLG rewards.

In addition, once you reach specific point thresholds based on your Tier, you’ll receive a Commission Bonus in ITLG, calculated from the total referral rewards you earned during the month.

In conclusion, by creating content and referring users, you can earn monthly ITLG rewards plus commissions from your referrals.

📍Points are snapshotted every 7 days. The monthly cut-off is on the 23rd, with rewards distributed within the following 7 days.

🚫 Content Rules, Anti-Cheat & Disqualification Policy
To maintain fairness and reward true effort, the following rules apply strictly:

Only content posted within the official timeframe of the month is considered valid for rewards of that month.

❌ What will NOT be accepted:
Reposting images or videos created by other Ambassadors or official InterLink accounts (especially from @InterLink_X or other country teams)
→ ⚠️ Immediate disqualification or demotion without warning, and points are reset to 0

Reusing the same content repeatedly across multiple platforms (e.g., reposting the same image/video every few days)
→ Only the first version will be counted; others will be rejected

Low-effort “videos”:

Single static scene stretched for >10 seconds

Slideshow with no motion, no voice, no editing
→ Treated as an image post, not a video
→ May result in point deduction if repeated

Any form of view/engagement manipulation (fake likes, bot traffic, buying views, etc.)
→ Zero tolerance: permanent ban from daily tasks + disqualification from rewards

🎗Content Creation Points & Bonus Points
Platform

Activity

Points

Bonus Points 

Telegram

Host mini-games, AMAs, quizzes, or community discussions

10

>100 participants

+5

>300 participants

+10

X

Like + Retweet/Quote

InterLink Official post

1





X

Create original post with image or video

3

>1,000 views

+1

>3,000 views

+3

X

Analytical Article/Thread

8

>1,000 views

+5

>3,000 views

+8

Facebook

Create original post with image or video

3

>200 likes

+1

>500 likes

+3

TikTok/Youtube

Create original video content 

with images only

3

>1,000 views

+1

>3,000 views

+3

TikTok/Youtube

Create original video content with voice-over, edit, or real footage

Duration: <30s

5

>1,000 views

+2

>3,000 views

+5

TikTok/Youtube

Create original video content with voice-over, edit, or real footage

Duration: >30s

8

>1,000 views

+5

>3,000 views

+8

All platforms

Livestream/AMA

20

>100 participants

+10

>300 participants

+20

On-site

Offline event

50

>100 participants

+50

>300 participants

+80

🏵Content Creation Point Exchange Rate with ITLG
Points level

Tier 1 (ITLG)

Tier 2 (ITLG)

Tier 3 (ITLG)

200

0

0

1,000

400

2,500

2,500

2,500

800

5,000

5,000

5,000

1,600

10,000

10,000

10,000

3,200

20,000

20,000

20,000

6,400

40,000

40,000

40,000

12,800

80,000

80,000

80,000

🧩Example - For Tier 3 Ambassador
From Day 1 to Day 21, you:

Post 30 posts on X (= 30 x 3 = 90 base points)

All of your post get over 3,000 views  (= 30 x 3 = 90 bonus points)

Post 30 TikTok videos longer than 30 seconds (= 30 x 8 = 240 base points)

All of your TikTok videos get over 3,000 views (= 30 x 8 = 240 bonus points)

⇒ Total base points and bonus points: 660 points

As a Tier 3, your 660 points from Content Creation will be exchanged to 2,500 ITLG

🏆New-user Referral Commission (10%)
Each tier will have a specific minimum point threshold from Content Creation, and once that threshold is met, the ambassador will qualify to earn referral commissions for every new user they invite to join the InterLink Real Human Network.

Referral Commission

Tier 3

Tier 2

Tier 1

Commission Rate

10%

10%

10%

Point Level

200 Points

300 Points

500 Points

🧩Example - For Tier 3 Ambassador
On Day 21, a snapshot is taken. Since you've passed 500 points from Content Creation, you qualify to unlock the Referral Commission for the month. By the end of the month:

You have 40 F1 referrals = 40 x 500 = 20,000 ITLG earned

You have 50 F2 referrals = 50 x 250 = 12,500 ITLG earned

⇒ Total referral commission = 3,250 (= 10% x 32,500 ITLG)

⭐️Expanding Ambassador Program Reward (10%)
When you introduce someone to join the Ambassador Program, and they successfully meet the requirements to become an Ambassador, they will start receiving their monthly rewards.

In the same month that they earn rewards, you (as their inviter) will receive an additional 10% based on their reward amount.

Why this reward exists:
It acknowledges your effort in expanding the InterLink network with quality Ambassadors.

It motivates every Ambassador to not only grow individually, but also help others rise and succeed.

The more you inspire new leaders to join, the stronger your team and the community become.

🧩Example
You invite Alex to join as an Ambassador.

Alex meets all conditions and in his first month he earns 1,000 ITLG.

You, as the inviter, receive an additional 100 ITLG (10% of Alex’s reward).

💸 Mentorship Reward
Rules:
Applies only to Tier 2 Ambassadors and above.

Why this reward exists:
This reward is more than just numbers. It is a way to honor the mentors — those Tier 1 and Tier 2 leaders who dedicate their time and effort to guide others.

Mentorship & Training: Lower-level Ambassadors receive one-on-one support and careful training from their higher-level leaders.

Recognition of Leadership: The reward acknowledges leaders who show both vision and commitment in developing their teams.

Unity & Growth: It symbolizes the strength of solidarity — when leaders invest in their people, the whole community rises together.

👉 In short, this reward is a token of gratitude for those who not only lead, but also nurture, mentor, and empower others to become leaders themselves.

Reward Structure:
Tier 2 Ambassadors receive 20% of the rewards earned by their Tier 3 down-line.

Tier 1 Ambassadors receive:

20% of the rewards earned by their Tier 2 down-line.

10% of the rewards earned by their Tier 3 down-line.

🧩Example
A Tier 3 Ambassador earns 1,000 ITLG.

Their Tier 2 leader receives commission 200 ITLG (= 20% x 1,000 ITLG).

The Tier 1 leader above them also receives 100 ITLG (= 10% x 1,000 ITLG) from Tier 3’s rewards and 40 ITLG (= 20% x 200 ITLG) from Tier 2’s rewards

💡Difference Between the Two Commissions
Expanding Ambassador Program Reward: You earn 10% of the monthly rewards of any Ambassador you personally invited, once they qualify as an Ambassador.

Mentorship Reward: You earn 20% (Tier 2) or 10% (Tier 1) from the Ambassadors in your team structure who chose you as their leader.

This means if you are both the inviter and the leader, you can receive two rewards from the same person.

🧩Example 1 – You are both Inviter & Leader:
You invite me, and I also choose you as my leader.

I earn 10,000 ITLG this month.

You will receive:

Expanding Ambassador Program Reward: 10% × 10,000 = 1,000 ITLG

Mentorship Reward: 20% × 10,000 = 2,000 ITLG

Total = 3,000 ITLG

🧩Example 2 – You are only Inviter:
You invite me, but I choose someone else as my leader.

I earn 10,000 ITLG this month.

You will receive only:

Invite reward: 20% × 10,000 = 2,000 ITLG

is for another

♨️Penalty for Poor Team Management
If any Tier 3 Ambassador under your management is removed from the program, the leaders above them will face a deduction from their monthly rewards:

Tier 2 Leader: incurs a 5% deduction per removed Tier 3 member.

Tier 1 Leader: incurs a 10% deduction per removed Tier 3 member.

This ensures that leaders at every level actively support, mentor, and manage their teams effectively.

🧩Example Deduction
A Tier 2 Leader earns a total of 5,000 ITLG for the month.

If two Tier 3 Ambassadors in their team are removed during that month, the Tier 2 Leader incurs a 5% penalty per removed member:

5,000 - (5,000 × 5% × 2) = 4,500 ITLG remaining.

Meanwhile, the Tier 1 Leader above this structure would incur a 10% penalty per removed Tier 3 member from their own total monthly rewards.

By combining creativity, consistency, and loyalty, Ambassadors can secure both short-term ITLG rewards and long-term opportunities for leadership and Global Partner recognition.
Introducing the InterLink Ambassador Daily Task Rules
This set of rules has been carefully designed to provide structure, consistency, and accountability for every InterLink Ambassador across the globe.

To ensure fairness, integrity, and high-quality contributions, the following rules apply to ALL Daily Tasks. Please read carefully before submitting.

📍Daily Task points will be calculated using the same scoring system as the Monthly Reward Points Table.

📥 You may resubmit the same content for Monthly Reward using the separate Monthly Reward form.

🔒 Only Tier 2 and Tier 3 Ambassadors are eligible to participate in Daily Tasks.

📝 Submission Guidelines
Daily Task → Use this form: https://forms.gle/fgqqVsxVgvBkLrJy7

Monthly Reward → Use this form: https://forms.gle/f7jTGV6ibvmCDrb16

Only submissions through the correct form will be considered

Each Daily Task has a deadline (usually 24–48 hours after announcement). After the deadline, the submission form will be closed and late entries will not be accepted. The form will be reopened when the next Daily Task starts.

🚫 Content Rules, Anti-Cheat & Disqualification Policy

To maintain fairness and reward true effort, the following rules apply strictly:

What will NOT be accepted:

Reposting images or videos created by other Ambassadors or official InterLink accounts (especially from @InterLink_X or other country teams)
→ ⚠️ Immediate disqualification or demotion without warning, and points are reset to 0

Reusing the same content repeatedly across multiple platforms (e.g., reposting the same image/video every few days)
→ Only the first version will be counted; others will be rejected

Low-effort “videos”:

Single static scene stretched for >10 seconds

Slideshow with no motion, no voice, no editing
→ Treated as an image post, not a video
→ May result in point deduction if repeated

Any form of view/engagement manipulation (fake likes, bot traffic, buying views, etc.)
→ Zero tolerance: permanent ban from daily tasks + disqualification from rewards

Datebase 5
Users Insights_ Top AMA Questions
From a few previous AMAs, here are some frequently asked questions that reflect
users’ concerns. Everyone can review them to better understand current user
insights and also use this as a source for creating content.
Tokens & Listing
1. Why does InterLink need two tokens instead of just one?
InterLink uses two tokens because they serve different but complementary
purposes:
● $ITLG – Proof of Contribution (internal utility token):
Used inside the ecosystem for gaming, lucky spin, DAO voting, and ITLX
transaction fees. Think of $ITLG as a membership + participation token,
showing that you are an active builder in the Human Network.
● $ITL – External, tradable token:
Designed for real-world use such as payments, shopping, hotels, online
services, and exchange. $ITL is what provides InterLink with global reach and
liquidity. As adoption grows, this could drive billions of dollars in daily
transaction volume — a rare level of liquidity potential in crypto, which places
early holders of $ITL in a very strong position.
By separating these two roles, InterLink ensures a more sustainable and compliant
ecosystem. $ITLG powers internal growth, while $ITL connects us to the outside
world as the true payment currency. This dual-token design also prepares us for
listings on regulated exchanges (NYSE, NASDAQ), where compliance is critical.
2. What are the steps required for $ITLG verification?
The verification process follows this flow: $ITLG → Human Credit Score (HCS) →
Verified $ITLG
To maximize your Verified $ITLG, you need to achieve a high Human Credit Score
(HCS). Your HCS is determined by multiple factors, including:
● Active mining level – how consistently you mine.
● Mining activity of your referrals – your referred users’ mining also
contributes.
● On-chain activities in the InterLink Super Wallet – such as swaps, derivatives
trading, stock purchases, and more.
● Community contributions – being an Ambassador or actively contributing to
InterLink increases your score.
● Additional trust indicators – other objective measures designed to fairly
evaluate each individual’s credibility.
A higher HCS directly translates into a larger allocation of Verified $ITLG.
3. What is Verified $ITLG?
Verified $ITLG is the process of ensuring that $ITLG belongs to real contributors with
long-term commitment to InterLink.
● Once verified, $ITLG becomes Verified $ITLG – the only gateway to convert into
$ITL.
● This process protects the ecosystem from “short-term farming” (participants
who only collect tokens and leave) and ensures rewards and $ITL go only to
those who truly add value to the community.
Verified $ITLG is the portion of original $ITLG that has been fully verified and officially
moved out of the human node. This means it is no longer affected by the burning
mechanism.
4. How can Verified $ITLG be earned or lost?
● Earned: Verified $ITLG is a pool from $ITLG.
- Basically, users can only earn Verified $ITLG through mining $ITLG.
- Nextly, in order to earn a high amount of Verified $ITLG, one important factor to
earn high Verified $ITLG is HCS (human credit score), users need to have high HCS.
● Lost: Once $ITLG has been verified into Verified $ITLG, it cannot be lost.
However, if before verification a user fails to contribute, leaves the Security
Circle, or only engages short-term, then their unverified $ITLG will not qualify
to become Verified $ITLG.
5. Which token will be listed first: $ITL or $ITLG?
The listing order will depend on InterLink’s overall strategy and the timing that best
fits market conditions. Both $ITL and $ITLG have distinct roles within the ecosystem,
so the decision on which to prioritize will be made based on what aligns most with
InterLink’s roadmap at that moment.
At any point in time, whether it’s $ITLG, Verified $ITLG, or $ITL, each carries its own
unique mission and benefits within the InterLink ecosystem. Together, they are
designed to complement one another and ensure both utility and long-term
sustainability.
6. Why is Verified $ITLG considered the “gateway” to $ITL?
● Short answer: Only Verified $ITLG can be vested/locked to receive $ITL. Not all
$ITLG qualifies; only those verified through contribution and commitment can
be converted. This prevents short-term farming and protects the ecosystem’s
sustainability.
● Operational details: Once users hold Verified $ITLG, they unlock the ability to
choose vesting/locking plans:
○ Short-term vesting → immediate liquidity but lower $ITL rewards.
○ Long-term vesting/locking → stronger commitment, with much higher
$ITL rewards.
This system favors long-term holders and filters out those only seeking
short-term profit.
7. What’s the difference between $ITLG, Verified $ITLG, and $ITL?
● $ITLG: The internal token, representing proof of contribution. Distributed to
participants through games, activities, and rewards. It is primarily used to
encourage engagement and contribution within the ecosystem.
● Verified $ITLG: $ITLG that has been verified based on contribution, long-term
commitment, and Security Circle participation. Only Verified $ITLG can access
the mechanisms to convert into $ITL through vesting/locking. Verified $ITLG
acts as the filter that ensures valuable rewards go to real, long-term
contributors.
● $ITL: The external, tradable token used for payments and spending outside the
platform. It is designed to achieve global liquidity and can benefit from
mechanisms like burning and buybacks, which increase scarcity and support
its value as the ecosystem grows.
8. How many $ITLG tokens are needed to earn an $ITL token? What is the fixed
ratio?
The only way to obtain $ITL is through Verified $ITLG and the vesting/locking
mechanism. The exact conversion ratios are not fixed in the documents and will be
publicly announced through DAO governance.
Additionally, whether your $ITLG becomes Verified depends on your Human Credit
score, which evaluates your contribution and level of commitment.
9. What is the conversion rate of $ITL and $ITLG?
First, it’s important to clarify: there is no fixed “conversion rate.” The correct term is
$ITL reward rate.
Here’s how it works:
1. You mine $ITLG.
2. Based on Human Credit Score (HCS) after verification, you obtain Verified
$ITLG.
3. You can then stake Verified $ITLG to receive $ITL rewards.
Staking options:
● Lock & vest → Higher $ITL reward rate. This incentivizes long-term
commitment and supports token price stability.
● No lock → You still receive $ITL rewards, but at a lower rate.
Important notes:
● Your $ITLG is never lost. When you stake, it stays intact; you are simply
allocated additional $ITL.
● You have full flexibility: lock all, part, or none of your tokens.
● The reward mechanism is designed to be sustainable, with research drawn
from lessons of other token models.
● The exact $ITL reward rate will be officially announced in the future.
Security Group
10. What role does the Security Group play in the verification process?
Security Group is a different mechanism for mining.
- Instead of individual mining, users expand their human node and earn $ITLG
through being active and referrals.
- Security group or group mining illustrate another trusted and more stable
process of earning $ITLG and Verified $ITLG. Human Nodes can operate in
human-node clusters (group) of 5 Human Nodes, this activates the use of
multi-node consensus. This means, each node verifies the others, forming a
closed-loop trust network. This strengthens the Human Network, raises trust
levels --> higher HCS and higher Verified $ITLG.
“The tighter the relationships you build within your Security Group, the more you
verify, the more members become verified and the more Verified $ITLG you hold;
That's just the mechanism of Human Node.”
11. Within the Security Group, can users freely choose a group, or must it be
formed through their referral network?
Yes, anyone can. However, the challenge lies in carefully selecting group members.
To maintain high trust and quality, each Security Group must be composed of
reliable members. Therefore, before the official launch of Security Groups, users must
consider their group composition carefully in order to fully leverage the benefits of
Group Mining.
12. How will those who don't have a single referral build their Security Group?
Even if a user has no direct referral, they can still build their Security Group.
- They may join any active group in the community, ensuring that no one is “left
behind” due to a lack of referrals and that everyone has a chance to get
verified if they remain active.
- Users can also start by inviting close connections such as family members or
friends, which creates a more trusted and accountable Security Circle from the
beginning.
- Alternatively, they can expand by connecting online with other active
community members.
InterLink emphasizes the importance of real, human connections — building
Security Circles with genuine relationships strengthens trust, accountability, and
long-term sustainability in the network.
13. If a user’s Security Group is inactive but the user remains active (e.g., mining 6
times daily), will all accumulated $ITLG still be verified?
● In InterLink’s mechanism, each user is not limited to just one Security Group,
but can join up to five groups.
● Therefore, if one group becomes inactive, users can still maintain verification
through other groups, as long as they continuously demonstrate their
contributions and activity (e.g., mining daily, attending events, sharing
content).
● As a result, accumulated $ITLG can still be verified if the user remains active
and the other groups in their Security Circle stay engaged.
14. Do Security Group members need to be one of your referrals?
No. Members of your Security Group do not have to be your direct referrals.
● As long as they are active and responsible members, they qualify to build a
trustworthy Security Circle with you.
● This reduces reliance on one’s personal referral network and encourages
broader community collaboration.
Rewards & Adjustments
15. Why is the token balance decreasing for some users, and what is the reason
behind this adjustment?
The decrease in token balance is mainly due to the burning mechanism - a
deliberate process that reduces supply in order to increase scarcity and protect
long-term holders.
● Payment token vs. Store of value:
○ A typical payment token (e.g., USDT) is used only for transactions. Its
value remains stable because there is no scarcity effect.
○ A store of value token not only functions as a payment medium but also
holds or even appreciates in value thanks to mechanisms such as
burning, which reduce supply.
● Real-world example: After Ethereum’s EIP-1559 upgrade, every transaction
began burning a small portion of ETH. As a result, supply decreased while
demand stayed strong → ETH became more scarce, held value better, and in
many cases, appreciated in price.
● Application to InterLink:
○ $ITL isn’t designed to be just a payment token.
○ Through regular burning, the total supply of $ITL decreases over time.
○ As user adoption grows and demand rises, the combination of lower
supply and higher demand makes $ITL more valuable.
In short: Burning transforms $ITL from a simple payment token into a long-term
store of value for holders, while also ensuring fairness and sustainability in
tokenomics. That’s why it’s essential for you to stay active - inactivity can cause your
tokens to be burned.
16. Are the $ITLG tokens I receive in games or bonuses verified tokens?
No, the $ITLG you receive from games, activities, or bonuses are not immediately
Verified $ITLG.
● To become Verified $ITLG, these tokens must pass through the verification
process, which evaluates your contributions and commitment.
● This is measured using your Human Credit Score, which tracks activities such
as gaming, participation, referrals, content creation, and leadership
contributions.
● Only after your Human Credit Score and Security Circle activity meet the
requirements will your $ITLG be converted into Verified $ITLG.
In short: Earning $ITLG through games or bonuses is only the first step — what truly
matters is maintaining contribution and commitment so those tokens can be
verified.
No. If one of your referrals becomes inactive, the referral rewards you previously
17. Can I get back the referral rewards that were taken from me if an inactive
referral decided to be active again?
No - referral rewards that have already been burned will not be restored. Once
burned, those $ITLG are permanently removed from circulation.
Example:
● When you invite a direct referral, you receive 500 $ITLG as a reward.
● If that referral becomes inactive and is burned to 0, you will lose the 500 $ITLG
you had earned from them. That amount will never be returned.
● However, this person is still considered your referral. Your HHP (Human Help
Points) is what reflects referral activity:
○ When they go inactive, your HHP decreases.
○ If they later become active again, your HHP will return to normal.
In short: Past rewards in $ITLG are not restored, but reactivation of your referral will
help you regain HHP and improve your future earning potential.

`;const aiMemory = [
];

/* ================================================================ */

let currentUser = null;
let localMemory = [];
let ttsEnabled = true;
let currentUtterance = null;

/* DOM refs */
const identityInput = document.getElementById('identity');
const signinBtn = document.getElementById('signin');
const clearBtn = document.getElementById('clear');
const ambListEl = document.getElementById('amb-list');
const greetingEl = document.getElementById('greeting');
const statusEl = document.getElementById('status');
const chatArea = document.getElementById('chat-area');
const composer = document.getElementById('composer');
const sendBtn = document.getElementById('send');
const voiceBtn = document.getElementById('voiceBtn');
const ttsToggle = document.getElementById('tts-toggle');
const micToggle = document.getElementById('mic-toggle');
const logoutBtn = document.getElementById('logout');

/* render ambassadors list */
function renderAmbassadors(){
  ambListEl.innerHTML = '';
  aiMemory.forEach(a=>{
    const d = document.createElement('div');
    d.textContent = `${a.coach} — ${a.country} — ${a.telegram} — ${a.tier} — ID:${a.id}`;
    ambListEl.appendChild(d);
  });
}
renderAmbassadors();

/* ---------- Sign in / sign out / clear ---------- */
signinBtn.onclick = () => {
  const id = identityInput.value.trim();
  if(!id){ alert('Enter Telegram username or InterLink ID'); return; }
  currentUser = id;
  greetingEl.textContent = `Hello, ${currentUser}`;
  status('Ready');
  localMemory = JSON.parse(localStorage.getItem('coachjoel_mem_' + currentUser)) || [];
  renderChat();
};

logoutBtn.onclick = () => {
  currentUser = null;
  greetingEl.textContent = 'Sign in to begin';
  chatArea.innerHTML = '';
  status('Idle');
};

clearBtn.onclick = () => {
  if(!currentUser){ alert('Sign in first'); return; }
  if(confirm('Clear local conversation for ' + currentUser + '?')){
    localStorage.removeItem('coachjoel_mem_' + currentUser);
    localMemory = [];
    renderChat();
    status('Cleared');
  }
};

/* ---------- UI helpers ---------- */
function status(text){ statusEl.textContent = 'Status: ' + text; }

/* Add message dynamically (user or AI) */
function addMessage(role, text) {
  if(currentUser) {
    localMemory.push({ role, text });
    localStorage.setItem('coachjoel_mem_' + currentUser, JSON.stringify(localMemory));
  }
  appendMessage(role, text);
}

/* Append message to chat with links and copy button for AI */
function appendMessage(role, text) {
  const row = document.createElement('div');
  row.className = 'msg ' + (role === 'user' ? 'user' : 'ai');

  const avatar = document.createElement('div');
  avatar.className = 'avatar';
  avatar.textContent = role === 'user' ? 'U' : 'C';

  const bubbleWrapper = document.createElement('div');
  bubbleWrapper.className = 'bubble-wrapper';
  bubbleWrapper.style.position = 'relative';

  const bubble = document.createElement('div');
  bubble.className = 'bubble';
  linkifyTextNodes(text, bubble);

  bubbleWrapper.appendChild(bubble);

  // Copy button only for AI
  if(role === 'ai') {
    const copyBtn = document.createElement('button');
    copyBtn.textContent = '📋';
    copyBtn.title = 'Copy message';
    copyBtn.style.position = 'absolute';
    copyBtn.style.top = '4px';
    copyBtn.style.right = '4px';
    copyBtn.style.background = 'transparent';
    copyBtn.style.border = 'none';
    copyBtn.style.cursor = 'pointer';
    copyBtn.style.color = '#1de9ff';
    copyBtn.style.fontSize = '14px';
    copyBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(text).then(()=>alert('Copied to clipboard!')).catch(err=>console.error('Copy failed', err));
    });
    bubbleWrapper.appendChild(copyBtn);
  }

  row.appendChild(avatar);
  row.appendChild(bubbleWrapper);
  chatArea.appendChild(row);
  chatArea.scrollTop = chatArea.scrollHeight;
}

/* Render all chat messages */
function renderChat() {
  chatArea.innerHTML = '';
  localMemory.forEach(m => appendMessage(m.role, m.text));
  chatArea.scrollTop = chatArea.scrollHeight;
}

/* ---------- Dynamic linkify function ---------- */
function linkifyTextNodes(text, container) {
  if(!text) return;
  const urlRegex = /\b((https?:\/\/|www\.|t\.me\/)[^\s<>()]+)/gi;
  const lines = text.split('\n');

  lines.forEach((line, lineIndex)=>{
    let lastIndex = 0;
    let match;
    while((match=urlRegex.exec(line))!==null){
      const url = match[0];
      const index = match.index;
      if(index>lastIndex) container.appendChild(document.createTextNode(line.slice(lastIndex,index)));
      let href = url;
      if(!/^https?:\/\//i.test(href)) href = 'https://' + href;
      const a = document.createElement('a');
      a.href = href;
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
      a.textContent = url;
      a.style.color = '#1de9ff';
      a.style.textDecoration = 'underline';
      container.appendChild(a);
      lastIndex = index + url.length;
    }
    if(lastIndex < line.length) container.appendChild(document.createTextNode(line.slice(lastIndex)));
    if(lineIndex < lines.length - 1) container.appendChild(document.createElement('br'));
  });
}

/* ---------- Send message ---------- */
composer.addEventListener('keydown', (e) => {
  if(e.key === 'Enter' && !e.shiftKey){ e.preventDefault(); sendMessage(); }
});
sendBtn.onclick = sendMessage;

/* ---------- Voice to text ---------- */
let recognition = null;
if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  recognition = new SR();
  recognition.lang = 'en-US';
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  recognition.onstart = () => { voiceBtn.classList.add('mic-active'); };
  recognition.onend = () => { voiceBtn.classList.remove('mic-active'); };
  recognition.onresult = (ev) => {
    const transcript = ev.results[0][0].transcript;
    composer.value = transcript;
    composer.focus();
    addMessage('user', '🎙️ Sending voice message...');
    if(ttsEnabled && window.speechSynthesis){ 
      const utter = new SpeechSynthesisUtterance("Message sent"); 
      utter.lang = 'en-US'; 
      window.speechSynthesis.speak(utter); 
    }
    setTimeout(()=>sendMessage(),500);
  };
}
voiceBtn.onclick = () => { if(!recognition){ alert('Speech recognition not supported'); return; } recognition.start(); };
micToggle.onclick = () => { if(!recognition){ alert('Speech recognition not supported'); return; } recognition.start(); };

/* ---------- Text-to-Speech ---------- */
ttsToggle.onclick = () => {
  ttsEnabled = !ttsEnabled;
  ttsToggle.textContent = ttsEnabled ? '🔊 TTS: On' : '🔇 TTS: Off';
  if(!ttsEnabled && window.speechSynthesis) window.speechSynthesis.cancel();
};
function speakText(text){
  if(!ttsEnabled || !window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  currentUtterance = new SpeechSynthesisUtterance(text);
  const voices = window.speechSynthesis.getVoices();
  let male = voices.find(v=>/male|Daniel|David|John|Alex|Guy/i.test(v.name));
  if(!male) male = voices.find(v=>/en-?us/i.test(v.lang)) || voices[0];
  if(male) currentUtterance.voice = male;
  currentUtterance.lang = 'en-US';
  currentUtterance.rate = 1;
  currentUtterance.pitch = 1;
  window.speechSynthesis.speak(currentUtterance);
}

/* ---------- Typing & progressive reveal ---------- */
function showTypingReveal(answerText){
  const typingRow = document.createElement('div'); 
  typingRow.className = 'msg ai';
  const av = document.createElement('div'); av.className='avatar'; av.textContent='C';
  const bubbleWrapper = document.createElement('div'); 
  bubbleWrapper.className='bubble-wrapper';
  bubbleWrapper.style.position='relative';
  const bubble = document.createElement('div'); bubble.className='bubble';
  bubble.innerHTML=`<p class="typing">Coach Joel AI is composing…</p>`;
  bubbleWrapper.appendChild(bubble);
  typingRow.appendChild(av); typingRow.appendChild(bubbleWrapper);
  chatArea.appendChild(typingRow);
  chatArea.scrollTop = chatArea.scrollHeight;

  setTimeout(()=>{
    bubble.innerHTML='<p></p>';
    const p=bubble.querySelector('p');
    let i=0; const speed=10;
    function step(){
      i+=speed;
      p.textContent=answerText.slice(0,i);
      chatArea.scrollTop=chatArea.scrollHeight;
      if(i<answerText.length) requestAnimationFrame(step);
      else {
        chatArea.removeChild(typingRow);
        addMessage('ai', answerText);
      }
    }
    requestAnimationFrame(step);
  },600+Math.random()*400);
}

/* ---------- Send message main flow ---------- */
async function sendMessage(){
  if(!currentUser){ alert('Please sign in first'); return; }
  const text = composer.value.trim();
  if(!text) return;
  addMessage('user', text);
  composer.value='';
  status('Thinking...');

  const profile = aiMemory.find(a => a.id.toLowerCase()===currentUser.toLowerCase()||a.telegram.toLowerCase()===currentUser.toLowerCase());
  const userInfo = profile ? `Profile: ${profile.coach} (${profile.country}), Tier: ${profile.tier}` : 'Profile: not found';
  const prompt = SYSTEM_PROMPT + "\n\nUser Info:\n" + userInfo + "\n\nConversation:\n" +
    localMemory.slice(-12).map(m => (m.role==='user'?`User: ${m.text}`:`Coach Joel AI: ${m.text}`)).join("\n") +
    `\n\nUser: ${text}\nAssistant:`;
  const payload = { contents:[{parts:[{text:prompt}]}] };

  try{
    status('Please wait...');
    const resp = await fetch(GEMINI_ENDPOINT+'?key='+encodeURIComponent(API_KEY),{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify(payload)
    });
    const j=await resp.json();
    const answer=j?.candidates?.[0]?.content?.parts?.map(p=>p.text).join('\n')||'I could not generate a response. Please try again later.';
    status('Ready');
    showTypingReveal(answer);
    speakText(answer);
  }catch(err){
    console.error('API error', err);
    addMessage('ai','Error: '+(err.message||err));
    status('Error contacting API');
  }
}

/* ---------- Init ---------- */
function init(){
  if(window.speechSynthesis && window.speechSynthesis.getVoices().length===0){
    window.speechSynthesis.onvoiceschanged = ()=>{};
  }
  status('Idle');
}
init();
