import ACTION_TYPE from './mapListActionType';

const initialState = [{ no: 1, map: 'Smolensk', source: 'NuncCommodo.ppt' },
  { no: 2, map: 'Viļāni', source: 'Rutrum.ppt' },
  { no: 3, map: 'Uppsala', source: 'Dui.mpeg' },
  { no: 4, map: 'Mūḩ Ḩasan', source: 'Cum.doc' },
  { no: 5, map: 'Real', source: 'AugueVestibulum.avi' },
  { no: 6, map: 'Chaem Luang', source: 'InQuam.pdf' },
  { no: 7, map: 'Anaco', source: 'RutrumNequeAenean.mp3' },
  { no: 8, map: 'Nova Odessa', source: 'NullaFacilisiCras.mp3' },
  { no: 9, map: 'Majiao', source: 'Turpis.ppt' },
  { no: 10, map: 'Jōetsu', source: 'Vel.avi' },
  { no: 11, map: 'Caculé', source: 'PlateaDictumst.avi' },
  { no: 12, map: 'Iyo', source: 'LacusAt.xls' },
  { no: 13, map: 'Jerada', source: 'IpsumPrimis.ppt' },
  { no: 14, map: 'Hyesan-dong', source: 'LuctusCumSociis.mp3' },
  { no: 15, map: 'Dapo', source: 'AliquamAugue.ppt' },
  { no: 16, map: 'Naj‘ Ḩammādī', source: 'ElitProin.xls' },
  { no: 17, map: 'Dayangqi', source: 'Nulla.avi' },
  { no: 18, map: 'Koubia', source: 'MagnaVulputateLuctus.tiff' },
  { no: 19, map: 'Araouane', source: 'Quam.txt' },
  { no: 20, map: 'Brok', source: 'NuncViverra.tiff' },
  { no: 21, map: 'Liangting', source: 'PellentesqueUltricesPhasellus.mp3' },
  { no: 22, map: 'Qianzhou', source: 'UltricesErat.gif' },
  { no: 23, map: 'Shiwan', source: 'ErosElementumPellentesque.avi' },
  { no: 24, map: 'Clermont-Ferrand', source: 'Congue.mov' },
  { no: 25, map: 'Wenqiao', source: 'MaecenasRhoncus.mp3' },
  { no: 26, map: 'Sinuknipan', source: 'Velit.xls' },
  { no: 27, map: 'Mascouche', source: 'NamUltrices.txt' },
  { no: 28, map: 'Mlawat', source: 'TurpisEnim.gif' },
  { no: 29, map: 'Pytalovo', source: 'Aenean.avi' },
  { no: 30, map: 'Carvoeira', source: 'DonecUt.ppt' },
  { no: 31, map: 'Mahates', source: 'Suspendisse.mp3' },
  { no: 32, map: 'Ash Shuqayrah', source: 'DonecVitae.tiff' },
  { no: 33, map: 'Islāmkot', source: 'FaucibusCursusUrna.pdf' },
  { no: 34, map: 'Fuquan', source: 'Tristique.ppt' },
  { no: 35, map: 'Urjala', source: 'IdPretium.avi' },
  { no: 36, map: 'Sambungjaya', source: 'Sit.ppt' },
  { no: 37, map: 'Ohrid', source: 'PorttitorLacus.mp3' },
  { no: 38, map: 'Den Chai', source: 'InterdumVenenatisTurpis.jpeg' },
  { no: 39, map: 'Yashio-shi', source: 'NonLigulaPellentesque.xls' },
  { no: 40, map: 'Dagang', source: 'AtLoremInteger.xls' },
  { no: 41, map: 'Białobrzegi', source: 'SitAmetJusto.ppt' },
  { no: 42, map: 'Hongshi', source: 'LiberoConvallis.png' },
  { no: 43, map: 'La Peña', source: 'VelAccumsanTellus.pdf' },
  { no: 44, map: 'Gustavia', source: 'VelEnimSit.avi' },
  { no: 45, map: 'Dingli', source: 'Arcu.xls' },
  { no: 46, map: 'Menlou', source: 'LoremIdLigula.xls' },
  { no: 47, map: 'Langkapcaang Hilir', source: 'VelitNec.mov' },
  { no: 48, map: 'Lyubimets', source: 'PurusAliquet.xls' },
  { no: 49, map: 'Bordeaux', source: 'AugueAliquamErat.avi' },
  { no: 50, map: 'San Jerónimo', source: 'Aliquam.mov' },
  { no: 51, map: 'Uarini', source: 'Et.gif' },
  { no: 52, map: 'Banaran', source: 'EgestasMetus.avi' },
  { no: 53, map: 'Huibu', source: 'Quam.mov' },
  { no: 54, map: 'Lastoursville', source: 'CrasMi.ppt' },
  { no: 55, map: 'Murom', source: 'HabitassePlateaDictumst.xls' },
  { no: 56, map: 'Fornelos', source: 'MolestieNibh.mp3' },
  { no: 57, map: 'Maisí', source: 'DuisFaucibus.avi' },
  { no: 58, map: 'Shuiyuesi', source: 'NonVelitNec.txt' },
  { no: 59, map: 'Koška', source: 'NonummyIntegerNon.xls' },
  { no: 60, map: 'Teno', source: 'LaciniaEratVestibulum.jpeg' },
  { no: 61, map: 'Yaroslavl', source: 'Nulla.mpeg' },
  { no: 62, map: 'Kropotkin', source: 'InEstRisus.ppt' },
  { no: 63, map: 'Ban Ratsada', source: 'Porttitor.avi' },
  { no: 64, map: 'Ngromo', source: 'TortorSollicitudin.ppt' },
  { no: 65, map: 'Yunyan', source: 'Accumsan.mp3' },
  { no: 66, map: 'Shitang', source: 'LectusVestibulumQuam.xls' },
  { no: 67, map: 'Téra', source: 'VehiculaCondimentumCurabitur.tiff' },
  { no: 68, map: 'Abovyan', source: 'NonVelitNec.mp3' },
  { no: 69, map: 'Barotac Nuevo', source: 'VariusNulla.pdf' },
  { no: 70, map: 'Bledzew', source: 'Vivamus.mp3' },
  { no: 71, map: 'Yingzhou', source: 'OrciEgetOrci.mp3' },
  { no: 72, map: 'Omaha', source: 'PellentesqueQuisque.ppt' },
  { no: 73, map: 'Guozhai', source: 'VestibulumVelitId.ppt' },
  { no: 74, map: 'Ilek', source: 'AtDolor.png' },
  { no: 75, map: 'Serebryanyye Prudy', source: 'EtTempus.avi' },
  { no: 76, map: 'San Diego', source: 'NullaNunc.ppt' },
  { no: 77, map: 'Fuwen', source: 'ArcuLibero.xls' },
  { no: 78, map: 'Nizhniy Chir', source: 'Eu.mp3' },
  { no: 79, map: 'Zvishavane', source: 'Convallis.png' },
  { no: 80, map: 'Karangan', source: 'SapienSapien.png' },
  { no: 81, map: 'Moglicë', source: 'OdioCondimentum.tiff' },
  { no: 82, map: 'Dikwa', source: 'EgetSemper.ppt' },
  { no: 83, map: 'Arţās', source: 'SodalesSed.jpeg' },
  { no: 84, map: 'Jingmao', source: 'PosuereCubiliaCurae.tiff' },
  { no: 85, map: 'Červená Voda', source: 'SapienUrnaPretium.avi' },
  { no: 86, map: 'Tari', source: 'TortorEuPede.tiff' },
  { no: 87, map: 'Senlis', source: 'Aliquam.png' },
  { no: 88, map: 'Dunkerque', source: 'ViverraEget.ppt' },
  { no: 89, map: 'Monasterevin', source: 'PedeLobortis.xls' },
  { no: 90, map: 'Mangga Dua', source: 'SapienIaculis.ppt' },
  { no: 91, map: 'Shuanghe', source: 'Potenti.ppt' },
  { no: 92, map: 'San Pedro Apartado', source: 'AmetJustoMorbi.avi' },
  { no: 93, map: 'Xiying', source: 'NibhInQuis.mpeg' },
  { no: 94, map: 'Carmen de Viboral', source: 'PulvinarSed.tiff' },
  { no: 95, map: 'Blois', source: 'Fermentum.jpeg' },
  { no: 96, map: 'Gondar', source: 'Orci.mp3' },
  { no: 97, map: 'Melaka', source: 'Blandit.avi' },
  { no: 98, map: 'Tibro', source: 'ErosViverraEget.xls' },
  { no: 99, map: 'Maurole', source: 'ASuscipitNulla.avi' },
  { no: 100, map: 'Yaviza', source: 'At.avi' },
  { no: 101, map: 'Telde', source: 'Luctus.gif' },
  { no: 102, map: 'Sędziejowice', source: 'NecCondimentum.ppt' },
  { no: 103, map: 'Perm', source: 'Lacinia.jpeg' },
  { no: 104, map: 'Dalubian', source: 'Sit.avi' },
  { no: 105, map: 'Säffle', source: 'Non.ppt' },
  { no: 106, map: 'Bitung', source: 'LiberoQuisOrci.xls' },
  { no: 107, map: 'Gweru', source: 'DolorVelEst.xls' },
  { no: 108, map: 'Tashtagol', source: 'RutrumRutrum.jpeg' },
  { no: 109, map: 'Siaya', source: 'SitAmet.avi' },
  { no: 110, map: 'Chivilcoy', source: 'MusEtiamVel.xls' },
  { no: 111, map: 'Oster', source: 'Turpis.ppt' },
  { no: 112, map: 'Morden', source: 'VitaeNisiNam.mp3' },
  { no: 113, map: 'Sv. Trojica v Slov. Goricah', source: 'HacHabitasse.tiff' },
  { no: 114, map: 'Kumalarang', source: 'Tellus.tiff' },
  { no: 115, map: 'Rumboci', source: 'Ornare.xls' },
  { no: 116, map: 'Vĩnh Tường', source: 'QuisTurpis.xls' },
  { no: 117, map: 'Olbramovice', source: 'AnteIpsumPrimis.mp3' },
  { no: 118, map: 'Batán', source: 'IdLigula.avi' },
  { no: 119, map: 'Bálsamo Oriental', source: 'Lacinia.mp3' },
  { no: 120, map: 'Sollefteå', source: 'EgetElit.ppt' },
  { no: 121, map: 'Pliwetan', source: 'EratVestibulum.tiff' },
  { no: 122, map: 'San Jerónimo', source: 'AugueA.avi' },
  { no: 123, map: 'He’an', source: 'Tristique.mp3' },
  { no: 124, map: 'Barra de São Francisco', source: 'NullamPorttitor.avi' },
  { no: 125, map: 'Batan', source: 'JustoInBlandit.mp3' },
  { no: 126, map: 'Sơn Tây', source: 'PhasellusSitAmet.tiff' },
  { no: 127, map: 'Taipinghu', source: 'Ut.mpeg' },
  { no: 128, map: 'Buzet', source: 'Dapibus.avi' },
  { no: 129, map: 'Vila Nova de Gaia', source: 'DapibusNullaSuscipit.mp3' },
  { no: 130, map: 'Lobuk', source: 'VivamusIn.mp3' },
  { no: 131, map: 'Bida', source: 'AtVelit.doc' },
  { no: 132, map: 'Oktyabr’skiy', source: 'ElementumNullam.mov' },
  { no: 133, map: 'Zangkaxa', source: 'LaoreetUtRhoncus.xls' },
  { no: 134, map: 'Gwangtan', source: 'PurusPhasellus.avi' },
  { no: 135, map: 'Dobrich', source: 'Cubilia.avi' },
  { no: 136, map: 'Florencia', source: 'PenatibusEt.gif' },
  { no: 137, map: 'Adamstown', source: 'AcTellus.pdf' },
  { no: 138, map: 'Cuyotenango', source: 'In.xls' },
  { no: 139, map: 'Wenwucao', source: 'MaecenasLeo.pdf' },
  { no: 140, map: 'Žatec', source: 'VariusNulla.avi' },
  { no: 141, map: 'Nacka', source: 'PellentesqueUltricesPhasellus.xls' },
  { no: 142, map: 'Dimitrovgrad', source: 'Augue.ppt' },
  { no: 143, map: 'Nyköping', source: 'Donec.gif' },
  { no: 144, map: 'Yaqian', source: 'EgetElit.ppt' },
  { no: 145, map: 'Firá', source: 'Metus.mpeg' },
  { no: 146, map: 'Xiajiashan', source: 'Hac.jpeg' },
  { no: 147, map: 'Káto Asítai', source: 'PedePosuere.mp3' },
  { no: 148, map: 'Zhaike', source: 'TinciduntEgetTempus.jpeg' },
  { no: 149, map: 'Sumber', source: 'Leo.tiff' },
  { no: 150, map: 'Krasnaya Polyana', source: 'EuInterdum.xls' },
  { no: 151, map: 'Ängelholm', source: 'LobortisEst.mp3' },
  { no: 152, map: 'Xiabeisi', source: 'EgetMassaTempor.ppt' },
  { no: 153, map: 'Lutowiska', source: 'Egestas.xls' },
  { no: 154, map: 'Wangshi', source: 'DonecUt.xls' },
  { no: 155, map: 'Arroyo Seco', source: 'LuctusEt.mpeg' },
  { no: 156, map: 'Mangere', source: 'NullaSed.txt' },
  { no: 157, map: 'Fram', source: 'AdipiscingElit.xls' },
  { no: 158, map: 'Nogent-sur-Marne', source: 'At.mp3' },
  { no: 159, map: 'Kościerzyna', source: 'PrimisInFaucibus.mp3' },
  { no: 160, map: 'Larangan', source: 'PhasellusId.ppt' },
  { no: 161, map: 'Mineiros', source: 'UllamcorperAugue.mp3' },
  { no: 162, map: 'Gudong', source: 'At.mp3' },
  { no: 163, map: 'Kalmar', source: 'AliquetAtFeugiat.tiff' },
  { no: 164, map: 'Songshan', source: 'Tellus.xls' },
  { no: 165, map: 'Los Andes', source: 'QuamAOdio.xls' },
  { no: 166, map: 'Krivaja', source: 'Eros.xls' },
  { no: 167, map: 'Wu’erbu Baolige', source: 'RutrumAc.mp3' },
  { no: 168, map: 'Rokoy', source: 'CursusUrna.ppt' },
  { no: 169, map: 'Port Nolloth', source: 'Congue.avi' },
  { no: 170, map: 'Itatskiy', source: 'Sed.ppt' },
  { no: 171, map: 'Tianxin', source: 'ArcuSed.xls' },
  { no: 172, map: 'Lalībela', source: 'ProinEuMi.png' },
  { no: 173, map: 'Tambaksari', source: 'Iaculis.avi' },
  { no: 174, map: 'Jönköping', source: 'InBlandit.mp3' },
  { no: 175, map: 'Roubaix', source: 'DonecDiam.tiff' },
  { no: 176, map: 'Kozy', source: 'NecSemDuis.avi' },
  { no: 177, map: 'Lubowidz', source: 'In.png' },
  { no: 178, map: 'Bekondo', source: 'NullamSit.jpeg' },
  { no: 179, map: 'Taklale', source: 'AmetErat.ppt' },
  { no: 180, map: 'Mozirje', source: 'In.avi' },
  { no: 181, map: 'Pruszcz', source: 'Primis.ppt' },
  { no: 182, map: 'Gavião', source: 'NibhIn.txt' },
  { no: 183, map: 'Kassiri', source: 'CuraeMaurisViverra.jpeg' },
  { no: 184, map: 'Amga', source: 'NatoquePenatibusEt.ppt' },
  { no: 185, map: 'Samut Songkhram', source: 'Id.xls' },
  { no: 186, map: 'Chichigalpa', source: 'AliquamConvallisNunc.doc' },
  { no: 187, map: 'Puricay', source: 'NamTristiqueTortor.tiff' },
  { no: 188, map: 'Altamira', source: 'DiamNam.xls' },
  { no: 189, map: 'Saiki', source: 'Malesuada.ppt' },
  { no: 190, map: 'Sanxi', source: 'QuamSuspendisse.avi' },
  { no: 191, map: 'Phak Hai', source: 'EgetTinciduntEget.xls' },
  { no: 192, map: 'Peña', source: 'EuMagna.gif' },
  { no: 193, map: "Hospitalet De Llobregat, L'", source: 'VenenatisLacinia.ppt' },
  { no: 194, map: 'Huangliang', source: 'EleifendPedeLibero.gif' },
  { no: 195, map: 'Tayzhina', source: 'Sit.xls' },
  { no: 196, map: 'Trashigang', source: 'PurusEuMagna.png' },
  { no: 197, map: 'Washington', source: 'Convallis.xls' },
  { no: 198, map: 'Kikinda', source: 'Rutrum.mov' },
  { no: 199, map: 'Xinjiezi', source: 'EuTinciduntIn.ppt' },
  { no: 200, map: 'Izmaylovo', source: 'PraesentBlanditNam.avi' },
  { no: 201, map: 'Zlatar', source: 'Quam.tiff' },
  { no: 202, map: 'Tangwang', source: 'NamCongueRisus.doc' },
  { no: 203, map: 'Hoani', source: 'DuiProin.xls' },
  { no: 204, map: 'Pare', source: 'InTemporTurpis.mp3' },
  { no: 205, map: 'Biryulëvo Zapadnoye', source: 'FelisSedLacus.avi' },
  { no: 206, map: 'Batang', source: 'Eget.ppt' },
  { no: 207, map: 'Cikadu', source: 'Donec.mp3' },
  { no: 208, map: 'Garanhuns', source: 'UltricesPosuereCubilia.ppt' },
  { no: 209, map: 'Pensacola', source: 'ElitProinInterdum.pdf' },
  { no: 210, map: 'Grand Rapids', source: 'DonecPharetraMagna.avi' },
  { no: 211, map: 'Wufeng', source: 'Non.jpeg' },
  { no: 212, map: 'Sulbiny Górne', source: 'IaculisDiamErat.mp3' },
  { no: 213, map: 'Sebuku', source: 'MaurisLaciniaSapien.avi' },
  { no: 214, map: 'Qujiang', source: 'PenatibusEtMagnis.txt' },
  { no: 215, map: 'Mehtar Lām', source: 'Donec.mp3' },
  { no: 216, map: 'Magoúla', source: 'Mauris.jpeg' },
  { no: 217, map: 'Kyurdarmir', source: 'EuMagnaVulputate.avi' },
  { no: 218, map: 'Pudasjärvi', source: 'MiSit.xls' },
  { no: 219, map: 'Przytyk', source: 'AdipiscingMolestieHendrerit.avi' },
  { no: 220, map: 'Klang', source: 'Erat.ppt' },
  { no: 221, map: 'Chisong', source: 'PharetraMagnaAc.png' },
  { no: 222, map: 'Herval', source: 'VivamusMetusArcu.xls' },
  { no: 223, map: 'Ulee Gle', source: 'Ipsum.xls' },
  { no: 224, map: 'Gorki Vtoryye', source: 'PurusSit.gif' },
  { no: 225, map: 'Lindome', source: 'DapibusDolorVel.jpeg' },
  { no: 226, map: 'Wuying', source: 'ConsequatMorbiA.jpeg' },
  { no: 227, map: 'Polanka Wielka', source: 'Pede.doc' },
  { no: 228, map: 'Palmeiros', source: 'Rhoncus.xls' },
  { no: 229, map: 'Kampokpok', source: 'QuisTortorId.png' },
  { no: 230, map: 'Mobile', source: 'Sem.xls' },
  { no: 231, map: 'Moissy-Cramayel', source: 'IpsumPraesent.mov' },
  { no: 232, map: 'Lazeshchyna', source: 'MagnaAc.ppt' },
  { no: 233, map: 'Chayuan', source: 'OrnareConsequatLectus.pdf' },
  { no: 234, map: 'Galutu', source: 'LobortisSapienSapien.ppt' },
  { no: 235, map: 'Lipu', source: 'CrasNonVelit.ppt' },
  { no: 236, map: 'Timahankrajan', source: 'ConvallisEget.xls' },
  { no: 237, map: 'Al Maḩallah al Kubrá', source: 'ElementumEu.avi' },
  { no: 238, map: 'Yuhuang', source: 'Nisi.gif' },
  { no: 239, map: 'Envigado', source: 'EtUltricesPosuere.avi' },
  { no: 240, map: 'Xinxiang', source: 'Vulputate.tiff' },
  { no: 241, map: 'Al Judayrah', source: 'JustoSitAmet.ppt' },
  { no: 242, map: 'Cukanguncal', source: 'UtEratCurabitur.pdf' },
  { no: 243, map: 'Yushikalasu', source: 'Libero.avi' },
  { no: 244, map: 'Mrozy', source: 'TemporConvallisNulla.xls' },
  { no: 245, map: 'Pringsewu', source: 'EtMagnis.png' },
  { no: 246, map: 'Trang', source: 'SitAmet.xls' },
  { no: 247, map: 'Noisy-le-Grand', source: 'EtTempus.mpeg' },
  { no: 248, map: 'Now Zād', source: 'AcTellusSemper.xls' },
  { no: 249, map: 'Cortiços', source: 'PortaVolutpatErat.avi' },
  { no: 250, map: 'Riyue', source: 'Sem.gif' },
  { no: 251, map: 'Niška Banja', source: 'AtFeugiatNon.ppt' },
  { no: 252, map: 'Xichangmen', source: 'Sed.mp3' },
  { no: 253, map: 'Leworook', source: 'EgetRutrum.xls' },
  { no: 254, map: 'Nagasaki-shi', source: 'PotentiCras.jpeg' },
  { no: 255, map: 'Klichaw', source: 'Sollicitudin.doc' },
  { no: 256, map: 'Gjinoc', source: 'IpsumPrimisIn.ppt' },
  { no: 257, map: 'Moycullen', source: 'LuctusEt.mov' },
  { no: 258, map: 'Strömsund', source: 'A.mp3' },
  { no: 259, map: 'Zhouhe', source: 'VelitNec.mp3' },
  { no: 260, map: 'Sambilawang', source: 'AOdio.ppt' },
  { no: 261, map: 'Špišić-Bukovica', source: 'Non.ppt' },
  { no: 262, map: 'Nürnberg', source: 'In.tiff' },
  { no: 263, map: 'Imām Şāḩib', source: 'EleifendQuam.png' },
  { no: 264, map: 'Mucuri', source: 'TristiqueIn.xls' },
  { no: 265, map: 'Kyurdarmir', source: 'MattisPulvinarNulla.txt' },
  { no: 266, map: 'Rahama', source: 'MagnaAc.xls' },
  { no: 267, map: 'Vidual', source: 'PosuereNonummyInteger.png' },
  { no: 268, map: 'Leninsk', source: 'ConsequatMetusSapien.xls' },
  { no: 269, map: 'Rovira', source: 'OdioCrasMi.mp3' },
  { no: 270, map: 'Kholmsk', source: 'Amet.xls' },
  { no: 271, map: 'Iperó', source: 'SedMagnaAt.mov' },
  { no: 272, map: 'Binangun', source: 'VelitEu.avi' },
  { no: 273, map: 'Moya', source: 'OrciVehiculaCondimentum.jpeg' },
  { no: 274, map: 'Benito Juarez', source: 'CumSociisNatoque.xls' },
  { no: 275, map: 'Rzgów', source: 'Donec.mp3' },
  { no: 276, map: 'Saumur', source: 'Dui.avi' },
  { no: 277, map: 'Ichupampa', source: 'TempusSitAmet.avi' },
  { no: 278, map: 'Nogueira da Regedoura', source: 'PedeVenenatisNon.avi' },
  { no: 279, map: 'Klyuchevsk', source: 'EleifendQuam.mpeg' },
  { no: 280, map: 'Bécancour', source: 'EratVolutpatIn.pdf' },
  { no: 281, map: 'Kupavna', source: 'NequeDuis.pdf' },
  { no: 282, map: 'Clearwater', source: 'CrasNon.tiff' },
  { no: 283, map: 'Pinghu', source: 'Libero.ppt' },
  { no: 284, map: 'Xinghai', source: 'Tellus.avi' },
  { no: 285, map: 'Guanbuqiao', source: 'VelLectus.tiff' },
  { no: 286, map: 'Pamplona/Iruña', source: 'Erat.txt' },
  { no: 287, map: 'Lijiang', source: 'In.xls' },
  { no: 288, map: 'Venlo', source: 'Erat.ppt' },
  { no: 289, map: 'Trindade', source: 'PedeJustoEu.mov' },
  { no: 290, map: 'Chavão', source: 'Nulla.mp3' },
  { no: 291, map: 'Tía Juana', source: 'ElementumEuInterdum.tiff' },
  { no: 292, map: 'Wolanów', source: 'QuisAugueLuctus.mov' },
  { no: 293, map: 'Evansville', source: 'AmetCursus.jpeg' },
  { no: 294, map: 'Yangjiapo', source: 'Scelerisque.avi' },
  { no: 295, map: 'Kangmei', source: 'DolorMorbiVel.xls' },
  { no: 296, map: 'Malaya Dubna', source: 'SemperSapienA.xls' },
  { no: 297, map: 'Harper', source: 'Erat.avi' },
  { no: 298, map: 'Tiandu', source: 'Pretium.mp3' },
  { no: 299, map: 'Ipil', source: 'AliquamAugue.xls' },
  { no: 300, map: 'Kimakamak', source: 'CongueEgetSemper.ppt' },
  { no: 301, map: 'Sitangkai', source: 'HabitassePlateaDictumst.tiff' },
  { no: 302, map: 'Sanqu', source: 'NibhFusceLacus.tiff' },
  { no: 303, map: 'Rosais', source: 'Luctus.mp3' },
  { no: 304, map: 'Sokołów Podlaski', source: 'QuisTurpisEget.xls' },
  { no: 305, map: 'Baimaqiao', source: 'LuctusEtUltrices.png' },
  { no: 306, map: 'Bobowa', source: 'GravidaSemPraesent.mp3' },
  { no: 307, map: 'Wakuya', source: 'TellusNullaUt.ppt' },
  { no: 308, map: 'Inriville', source: 'VitaeQuamSuspendisse.mp3' },
  { no: 309, map: 'Pančevo', source: 'LiberoQuisOrci.xls' },
  { no: 310, map: 'Jiangya', source: 'Blandit.xls' },
  { no: 311, map: 'Cholpon-Ata', source: 'Imperdiet.ppt' },
  { no: 312, map: 'Timrat', source: 'AtVulputate.jpeg' },
  { no: 313, map: 'Luoxiong', source: 'EtCommodo.tiff' },
  { no: 314, map: 'Tambir', source: 'MagnaVestibulum.xls' },
  { no: 315, map: 'Borisova Griva', source: 'SitAmet.tiff' },
  { no: 316, map: 'Pontalina', source: 'Pellentesque.xls' },
  { no: 317, map: 'Magisterial', source: 'CuraeMauris.doc' },
  { no: 318, map: 'Lorena', source: 'AtNuncCommodo.txt' },
  { no: 319, map: 'Daoxian', source: 'Porttitor.tiff' },
  { no: 320, map: 'Norberg', source: 'InTempor.gif' },
  { no: 321, map: 'Tartouss', source: 'PellentesqueEgetNunc.xls' },
  { no: 322, map: 'Płock', source: 'OdioCras.mp3' },
  { no: 323, map: 'Bwizibwera', source: 'JustoAliquamQuis.png' },
  { no: 324, map: 'Kaulon', source: 'NecMolestie.avi' },
  { no: 325, map: 'Dalovice', source: 'UtMassaQuis.pdf' },
  { no: 326, map: 'Tiechanggou', source: 'LoremId.avi' },
  { no: 327, map: 'Si’en', source: 'DuiVel.mp3' },
  { no: 328, map: 'Senglea', source: 'VestibulumSitAmet.gif' },
  { no: 329, map: 'Kotel’niki', source: 'RidiculusMusEtiam.jpeg' },
  { no: 330, map: 'Balboa', source: 'SedTristiqueIn.xls' },
  { no: 331, map: 'El Cafetal', source: 'DuisAtVelit.mp3' },
  { no: 332, map: 'Dahu Satu', source: 'Porta.ppt' },
  { no: 333, map: 'Qinggang', source: 'AFeugiat.png' },
  { no: 334, map: 'Gordon Town', source: 'SodalesScelerisqueMauris.jpeg' },
  { no: 335, map: 'Arrën', source: 'DolorMorbi.xls' },
  { no: 336, map: 'Lyubotyn', source: 'TellusSemper.ppt' },
  { no: 337, map: 'Lichtenburg', source: 'Cubilia.avi' },
  { no: 338, map: 'Maisons-Alfort', source: 'Ante.avi' },
  { no: 339, map: 'Cigarogol', source: 'PotentiNullamPorttitor.mp3' },
  { no: 340, map: 'Neos Voutzás', source: 'Morbi.tiff' },
  { no: 341, map: 'Granville', source: 'PellentesqueViverraPede.ppt' },
  { no: 342, map: 'Nanqiao', source: 'Velit.xls' },
  { no: 343, map: 'Rio Claro', source: 'NisiVenenatisTristique.xls' },
  { no: 344, map: 'Melíki', source: 'Sagittis.avi' },
  { no: 345, map: 'Žiželice', source: 'InEst.avi' },
  { no: 346, map: 'Banqiaodian', source: 'FaucibusCursusUrna.png' },
  { no: 347, map: 'Qandala', source: 'Vivamus.avi' },
  { no: 348, map: 'Pangapisan', source: 'AmetEratNulla.mp3' },
  { no: 349, map: 'Vin’kivtsi', source: 'BibendumFelis.tiff' },
  { no: 350, map: 'Pijao', source: 'Vestibulum.xls' },
  { no: 351, map: 'Duwayr Raslān', source: 'IaculisDiamErat.tiff' },
  { no: 352, map: 'Tarrafal', source: 'DuisBibendum.mov' },
  { no: 353, map: 'Lille', source: 'Id.avi' },
  { no: 354, map: 'Dolní Čermná', source: 'OrciMaurisLacinia.ppt' },
  { no: 355, map: 'Smedjebacken', source: 'NullaInteger.xls' },
  { no: 356, map: 'Qusar', source: 'DuiNec.avi' },
  { no: 357, map: 'Zhangdan', source: 'Luctus.mpeg' },
  { no: 358, map: 'Fujioka', source: 'AugueVestibulum.tiff' },
  { no: 359, map: 'Nggelok', source: 'ConvallisNunc.png' },
  { no: 360, map: 'Montevista', source: 'EnimIn.txt' },
  { no: 361, map: 'Huayuan', source: 'PrimisInFaucibus.pdf' },
  { no: 362, map: 'Pandean', source: 'Ultricies.doc' },
  { no: 363, map: 'Bilhorod-Dnistrovs’kyy', source: 'Congue.mpeg' },
  { no: 364, map: 'Bugana', source: 'LigulaPellentesqueUltrices.xls' },
  { no: 365, map: 'Xinxu', source: 'Ut.avi' },
  { no: 366, map: 'Oroin Xibe', source: 'In.txt' },
  { no: 367, map: 'Hamburg', source: 'NuncRhoncus.txt' },
  { no: 368, map: 'Tulusmulyo', source: 'SemperPorta.xls' },
  { no: 369, map: 'Ilovlya', source: 'InHacHabitasse.ppt' },
  { no: 370, map: 'La Libertad', source: 'Nisi.pdf' },
  { no: 371, map: 'Mamburao', source: 'AmetErosSuspendisse.jpeg' },
  { no: 372, map: 'Cisek', source: 'OdioIn.doc' },
  { no: 373, map: 'Kendalrejo', source: 'AnteVivamus.ppt' },
  { no: 374, map: 'Agbannawag', source: 'MiSit.xls' },
  { no: 375, map: 'Huangmao', source: 'NonMiInteger.xls' },
  { no: 376, map: 'Xiaoshan', source: 'CuraeDuisFaucibus.mpeg' },
  { no: 377, map: 'Koramlik', source: 'LiberoNon.doc' },
  { no: 378, map: 'Matanzas', source: 'VelitEu.txt' },
  { no: 379, map: 'Bueng Samakkhi', source: 'SitAmet.png' },
  { no: 380, map: 'Santa Rosa', source: 'MaurisSitAmet.xls' },
  { no: 381, map: 'Jablonné nad Orlicí', source: 'Rutrum.tiff' },
  { no: 382, map: 'Kembang', source: 'Et.mp3' },
  { no: 383, map: 'Ikata-chō', source: 'Montes.avi' },
  { no: 384, map: 'Calanogas', source: 'Odio.txt' },
  { no: 385, map: 'Vannes', source: 'NibhLigula.ppt' },
  { no: 386, map: 'Magisterial', source: 'Dolor.txt' },
  { no: 387, map: 'Dolores', source: 'SapienQuisLibero.jpeg' },
  { no: 388, map: 'Jishui', source: 'Tempor.avi' },
  { no: 389, map: 'Wadusari', source: 'UtMassaVolutpat.gif' },
  { no: 390, map: 'Kalisangkrah Lor', source: 'EgetElitSodales.gif' },
  { no: 391, map: 'Bluefields', source: 'MaurisMorbiNon.png' },
  { no: 392, map: 'Berea', source: 'UtMaurisEget.gif' },
  { no: 393, map: 'Kangxung', source: 'ErosElementumPellentesque.avi' },
  { no: 394, map: 'Dagu', source: 'IdNulla.tiff' },
  { no: 395, map: 'Baratan', source: 'Nunc.avi' },
  { no: 396, map: 'Skellefteå', source: 'DiamNeque.avi' },
  { no: 397, map: 'Giồng Riềng', source: 'PrimisInFaucibus.avi' },
  { no: 398, map: 'Kotlovka', source: 'TurpisAdipiscing.avi' },
  { no: 399, map: 'Qiaotou', source: 'AmetJustoMorbi.xls' },
  { no: 400, map: 'Costa Nova do Prado', source: 'Lectus.ppt' },
  { no: 401, map: 'Singosari', source: 'Fusce.tiff' },
  { no: 402, map: 'Maracaibo', source: 'At.pdf' },
  { no: 403, map: 'Chakaray', source: 'Velit.pdf' },
  { no: 404, map: 'Jiangbei', source: 'ConsequatVarius.txt' },
  { no: 405, map: 'Guanjiabao', source: 'TinciduntNullaMollis.avi' },
  { no: 406, map: 'Pengxing', source: 'PedeVenenatisNon.mov' },
  { no: 407, map: 'Elena', source: 'OrciLuctus.xls' },
  { no: 408, map: 'Hemudu', source: 'VivamusMetusArcu.mp3' },
  { no: 409, map: 'Bobon', source: 'Ut.ppt' },
  { no: 410, map: 'Jiuhua', source: 'IaculisJusto.ppt' },
  { no: 411, map: 'Maying', source: 'EtUltricesPosuere.xls' },
  { no: 412, map: 'São José do Egito', source: 'NecSem.mp3' },
  { no: 413, map: 'Kushnytsya', source: 'IdLigulaSuspendisse.avi' },
  { no: 414, map: 'Taquile', source: 'Maecenas.avi' },
  { no: 415, map: 'Corinto', source: 'EuMassa.ppt' },
  { no: 416, map: 'Dalazi', source: 'PrimisInFaucibus.mpeg' },
  { no: 417, map: 'Rawa', source: 'NullamOrci.avi' },
  { no: 418, map: 'Itabaianinha', source: 'Magna.gif' },
  { no: 419, map: 'Atawutung', source: 'VelEnim.xls' },
  { no: 420, map: 'Wang’er', source: 'NullaQuisqueArcu.jpeg' },
  { no: 421, map: 'Ozamiz City', source: 'FermentumJustoNec.jpeg' },
  { no: 422, map: 'Gabahan', source: 'CuraeDonecPharetra.ppt' },
  { no: 423, map: 'Tuncheng', source: 'PosuereFelisSed.ppt' },
  { no: 424, map: 'Tiantang', source: 'Maecenas.png' },
  { no: 425, map: 'Trenggulunan', source: 'CondimentumCurabiturIn.jpeg' },
  { no: 426, map: 'Anchorage', source: 'ElementumEuInterdum.mp3' },
  { no: 427, map: 'Blois', source: 'CongueEgetSemper.tiff' },
  { no: 428, map: 'Bojong', source: 'Cras.xls' },
  { no: 429, map: 'Sungaibengkal', source: 'Tortor.jpeg' },
  { no: 430, map: 'Mirnyy', source: 'Sollicitudin.xls' },
  { no: 431, map: 'Serravalle', source: 'CursusIdTurpis.avi' },
  { no: 432, map: 'Amashca', source: 'PraesentLectusVestibulum.mp3' },
  { no: 433, map: 'Söderhamn', source: 'Vestibulum.avi' },
  { no: 434, map: 'San Jose', source: 'NislDuisAc.ppt' },
  { no: 435, map: 'Rejoagung', source: 'EstDonecOdio.txt' },
  { no: 436, map: 'Qamdo', source: 'SitAmetJusto.mpeg' },
  { no: 437, map: 'Castañas', source: 'EleifendPede.avi' },
  { no: 438, map: 'Drammen', source: 'QuamPharetraMagna.ppt' },
  { no: 439, map: 'Caldas da Felgueira', source: 'NisiNamUltrices.doc' },
  { no: 440, map: 'Qŭrghonteppa', source: 'Erat.avi' },
  { no: 441, map: 'Menggala', source: 'SedAugueAliquam.jpeg' },
  { no: 442, map: 'Gudong', source: 'IdPretiumIaculis.xls' },
  { no: 443, map: 'Al Manzilah', source: 'LacusMorbiQuis.txt' },
  { no: 444, map: 'Linamon', source: 'UrnaPretiumNisl.avi' },
  { no: 445, map: 'Jiangkou', source: 'MorbiQuisTortor.mov' },
  { no: 446, map: 'Vynohradivka', source: 'FaucibusOrciLuctus.mp3' },
  { no: 447, map: 'Lenchwe Le Tau', source: 'SitAmet.tiff' },
  { no: 448, map: 'Langzhong', source: 'DapibusDuisAt.mp3' },
  { no: 449, map: 'Albuquerque', source: 'ViverraPedeAc.avi' },
  { no: 450, map: 'Innisfil', source: 'Suscipit.tiff' },
  { no: 451, map: 'Xiangcunxiang', source: 'FringillaRhoncusMauris.tiff' },
  { no: 452, map: 'Santo Isidro', source: 'Ut.jpeg' },
  { no: 453, map: 'Pinghu', source: 'ArcuSedAugue.txt' },
  { no: 454, map: 'Wenchang', source: 'Consequat.png' },
  { no: 455, map: 'Sarandi', source: 'Donec.avi' },
  { no: 456, map: 'Santiago', source: 'At.jpeg' },
  { no: 457, map: 'Little Current', source: 'Blandit.ppt' },
  { no: 458, map: 'Oujda', source: 'UtRhoncusAliquet.ppt' },
  { no: 459, map: 'Huangshapu', source: 'Erat.gif' },
  { no: 460, map: 'Vilela', source: 'EleifendPede.png' },
  { no: 461, map: 'Lishu', source: 'NullaNunc.avi' },
  { no: 462, map: 'Tulu Bolo', source: 'EratVestibulumSed.avi' },
  { no: 463, map: 'Lazaro Cardenas', source: 'PurusSitAmet.mp3' },
  { no: 464, map: 'Kralupy nad Vltavou', source: 'Est.avi' },
  { no: 465, map: 'Tirmiz', source: 'Nulla.ppt' },
  { no: 466, map: 'Orange', source: 'SapienQuis.jpeg' },
  { no: 467, map: 'Båstad', source: 'Ante.xls' },
  { no: 468, map: 'Pajé', source: 'OdioInHac.ppt' },
  { no: 469, map: 'Barayong', source: 'Faucibus.mpeg' },
  { no: 470, map: 'Dimbokro', source: 'IdJusto.avi' },
  { no: 471, map: 'Minas de Matahambre', source: 'NullaElitAc.mov' },
  { no: 472, map: 'San Antonio Oeste', source: 'VolutpatEratQuisque.mp3' },
  { no: 473, map: 'Dagupan', source: 'AliquamErat.gif' },
  { no: 474, map: 'Jiapeng', source: 'VolutpatIn.avi' },
  { no: 475, map: 'Guzhen', source: 'Natoque.txt' },
  { no: 476, map: 'Álvares Machado', source: 'VelEstDonec.xls' },
  { no: 477, map: 'Manggekompo', source: 'SedLacus.ppt' },
  { no: 478, map: 'Khōst', source: 'MorbiAIpsum.xls' },
  { no: 479, map: 'Melekeok Village', source: 'Gravida.xls' },
  { no: 480, map: 'Kotlas', source: 'DonecDapibus.mp3' },
  { no: 481, map: 'Rinbung', source: 'InAnteVestibulum.xls' },
  { no: 482, map: 'Mariposa', source: 'Pretium.xls' },
  { no: 483, map: 'Ambam', source: 'Vel.avi' },
  { no: 484, map: 'San Isidro', source: 'ConsectetuerAdipiscing.mov' },
  { no: 485, map: 'Idenao', source: 'LuctusEt.jpeg' },
  { no: 486, map: 'Ibadan', source: 'Dictumst.ppt' },
  { no: 487, map: 'Sinarjaya', source: 'UltricesVelAugue.avi' },
  { no: 488, map: 'Svirsk', source: 'VestibulumAliquet.ppt' },
  { no: 489, map: 'Le Raincy', source: 'Tortor.tiff' },
  { no: 490, map: 'Chenhu', source: 'Nam.jpeg' },
  { no: 491, map: 'Las Sabanas', source: 'TellusNullaUt.xls' },
  { no: 492, map: 'Bongouanou', source: 'DictumstMorbi.tiff' },
  { no: 493, map: 'Cáchira', source: 'HacHabitassePlatea.png' },
  { no: 494, map: 'Qingfeng', source: 'TristiqueFusce.ppt' },
  { no: 495, map: 'Kaliuda', source: 'ScelerisqueMauris.gif' },
  { no: 496, map: 'Dzikowiec', source: 'FermentumDonecUt.tiff' },
  { no: 497, map: 'Moca', source: 'NislAeneanLectus.mp3' },
  { no: 498, map: 'Oof', source: 'NonLigula.ppt' },
  { no: 499, map: 'Toki', source: 'Natoque.png' },
  { no: 500, map: 'Magdeburg', source: 'Turpis.avi' }];

const mapListReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ACTION_TYPE.deleteMapListType:
      return state.filter((map) => map.no !== action.payload.id);
    case ACTION_TYPE.putMapListType:
      const mapItemToUpdate = state.filter((mapItem) => mapItem.no === action.payload.id)[0];
      const newMapItemData = {
        ...mapItemToUpdate,
        source: action.payload.newData.fileSource,
        map: action.payload.newData.map,
      };
      console.log(newMapItemData);
      return [newMapItemData, ...state.filter((mapData) => mapData.no !== action.payload.id)];
    case ACTION_TYPE.searchMapListType:
      if (action.payload.keyword === '') {
        return initialState;
      }
      return state.filter(
        (mapItem) => mapItem.map.toLowerCase().includes(action.payload.keyword.toLowerCase()),
      );
    case ACTION_TYPE.addMapListType:
      return [{
        no: action.payload.id,
        map: action.payload.map,
        source: action.payload.fileSource,
      },
      ...state,
      ];
    default: return state;
  }
};

export default mapListReducer;
