//数据
var addres=[{"id":"1","name":"北京市","parentid":"0"},
{"id":"2","name":"天津市","parentid":"0"},
{"id":"3","name":"河北省","parentid":"0"},
{"id":"4","name":"山西省","parentid":"0"},
{"id":"5","name":"内蒙古自治区","parentid":"0"},
{"id":"6","name":"辽宁省","parentid":"0"},
{"id":"7","name":"吉林省","parentid":"0"},
{"id":"8","name":"黑龙江省","parentid":"0"},
{"id":"9","name":"上海市","parentid":"0"},
{"id":"10","name":"江苏省","parentid":"0"},
{"id":"11","name":"浙江省省","parentid":"0"},
{"id":"12","name":"安徽省","parentid":"0"},
{"id":"13","name":"福建省","parentid":"0"},
{"id":"14","name":"江西省","parentid":"0"},
{"id":"15","name":"山东省","parentid":"0"},
{"id":"16","name":"河南省","parentid":"0"},
{"id":"17","name":"湖北省","parentid":"0"},
{"id":"18","name":"湖南省","parentid":"0"},
{"id":"19","name":"广东省","parentid":"0"},
{"id":"20","name":"广西壮族自治区","parentid":"0"},
{"id":"21","name":"海南省","parentid":"0"},
{"id":"22","name":"重庆市","parentid":"0"},
{"id":"23","name":"四川省","parentid":"0"},
{"id":"24","name":"贵州省","parentid":"0"},
{"id":"25","name":"云南省","parentid":"0"},
{"id":"26","name":"西藏自治区","parentid":"0"},
{"id":"27","name":"陕西省","parentid":"0"},
{"id":"28","name":"甘肃省","parentid":"0"},
{"id":"29","name":"青海省","parentid":"0"},
{"id":"30","name":"宁夏回族自治区","parentid":"0"},
{"id":"31","name":"新疆维吾尔自治区","parentid":"0"},
{"id":"32","name":"香港特别行政区","parentid":"0"},
{"id":"33","name":"澳门特别行政区","parentid":"0"},
{"id":"34","name":"台湾省","parentid":"0"},
{"id":"35","name":"市辖区","parentid":"1"},
{"id":"36","name":"市辖县","parentid":"1"},
{"id":"37","name":"东城区","parentid":"35"},
{"id":"38","name":"西城区","parentid":"35"},
{"id":"39","name":"崇文区","parentid":"35"},
{"id":"40","name":"宣武区","parentid":"35"},
{"id":"41","name":"丰台区","parentid":"35"},
{"id":"42","name":"石景山区","parentid":"35"},
{"id":"43","name":"海淀区","parentid":"35"},
{"id":"44","name":"门头沟区","parentid":"35"},
{"id":"45","name":"房山区","parentid":"35"},
{"id":"46","name":"通州区","parentid":"35"},
{"id":"47","name":"顺义区","parentid":"35"},
{"id":"48","name":"昌平区","parentid":"35"},
{"id":"49","name":"大兴区","parentid":"35"},
{"id":"50","name":"怀柔区","parentid":"35"},
{"id":"51","name":"平谷区","parentid":"35"},
{"id":"52","name":"密云县","parentid":"36"},
{"id":"53","name":"延庆县","parentid":"36"},
{"id":"54","name":"市辖区","parentid":"2"},
{"id":"55","name":"市辖县","parentid":"2"},
{"id":"56","name":"和平区","parentid":"54"},
{"id":"57","name":"河东区","parentid":"54"},
{"id":"58","name":"河西区","parentid":"54"},
{"id":"59","name":"南开区","parentid":"54"},
{"id":"60","name":"河北区","parentid":"54"},
{"id":"61","name":"红桥区","parentid":"54"},
{"id":"62","name":"塘沽区","parentid":"54"},
{"id":"63","name":"汉沽区","parentid":"54"},
{"id":"64","name":"大港区","parentid":"54"},
{"id":"65","name":"东丽区","parentid":"54"},
{"id":"66","name":"西青区","parentid":"54"},
{"id":"67","name":"津南区","parentid":"54"},
{"id":"68","name":"北辰区","parentid":"54"},
{"id":"69","name":"武清区","parentid":"54"},
{"id":"70","name":"宝坻区","parentid":"54"},
{"id":"71","name":"宁海县","parentid":"55"},
{"id":"72","name":"静海县","parentid":"55"},
{"id":"73","name":"蓟县","parentid":"55"},
{"id":"74","name":"石家庄市","parentid":"3"},
{"id":"75","name":"唐山市","parentid":"3"},
{"id":"76","name":"秦皇岛市","parentid":"3"},
{"id":"77","name":"邯郸市","parentid":"3"},
{"id":"78","name":"邢台市","parentid":"3"},
{"id":"79","name":"保定市","parentid":"3"},
{"id":"80","name":"张家口市","parentid":"3"},
{"id":"81","name":"承德市","parentid":"3"},
{"id":"82","name":"沧州市","parentid":"3"},
{"id":"83","name":"廊坊市","parentid":"3"},
{"id":"84","name":"衡水市","parentid":"3"},
{"id":"85","name":"长安区","parentid":"74"},
{"id":"86","name":"桥东区","parentid":"74"},
{"id":"87","name":"桥西区","parentid":"74"},
{"id":"88","name":"新华区","parentid":"74"},
{"id":"89","name":"井陉矿区","parentid":"74"},
{"id":"90","name":"裕华区","parentid":"74"},
{"id":"91","name":"井陉县","parentid":"74"},
{"id":"92","name":"正定县","parentid":"74"},
{"id":"93","name":"栾城县","parentid":"74"},
{"id":"94","name":"行唐县","parentid":"74"},
{"id":"95","name":"高邑县","parentid":"74"},
{"id":"96","name":"深泽县","parentid":"74"},
{"id":"97","name":"赞皇县","parentid":"74"},
{"id":"98","name":"无极县","parentid":"74"},
{"id":"99","name":"平山县","parentid":"74"},
{"id":"100","name":"元氏县","parentid":"74"},
{"id":"101","name":"赵县","parentid":"74"},
{"id":"102","name":"辛集市","parentid":"74"},
{"id":"103","name":"藁城市","parentid":"74"},
{"id":"104","name":"晋州市","parentid":"74"},
{"id":"105","name":"新乐市","parentid":"74"},
{"id":"106","name":"鹿泉市","parentid":"74"},
{"id":"107","name":"路南区","parentid":"75"},
{"id":"108","name":"路北区","parentid":"75"},
{"id":"109","name":"古冶区","parentid":"75"},
{"id":"110","name":"开平区","parentid":"75"},
{"id":"111","name":"丰南区","parentid":"75"},
{"id":"112","name":"丰润区","parentid":"75"},
{"id":"113","name":"滦县","parentid":"75"},
{"id":"114","name":"滦南县","parentid":"75"},
{"id":"115","name":"乐亭县","parentid":"75"},
{"id":"116","name":"迁西县","parentid":"75"},
{"id":"117","name":"玉田县","parentid":"75"},
{"id":"118","name":"唐海县","parentid":"75"},
{"id":"119","name":"遵化市","parentid":"75"},
{"id":"120","name":"迁安市","parentid":"75"},
{"id":"121","name":"海港区","parentid":"76"},
{"id":"122","name":"山海关区","parentid":"76"},
{"id":"123","name":"北戴河区","parentid":"76"},
{"id":"124","name":"青龙满族自治县","parentid":"76"},
{"id":"125","name":"昌黎县","parentid":"76"},
{"id":"126","name":"抚宁县","parentid":"76"},
{"id":"127","name":"卢龙县","parentid":"76"},
{"id":"128","name":"邯山区","parentid":"77"},
{"id":"129","name":"丛台区","parentid":"77"},
{"id":"130","name":"复兴区","parentid":"77"},
{"id":"131","name":"峰峰矿区","parentid":"77"},
{"id":"132","name":"邯郸县","parentid":"77"},
{"id":"133","name":"临漳县","parentid":"77"},
{"id":"134","name":"成安县","parentid":"77"},
{"id":"135","name":"大名县","parentid":"77"},
{"id":"136","name":"涉县","parentid":"77"},
{"id":"137","name":"磁县","parentid":"77"},
{"id":"138","name":"肥乡县","parentid":"77"},
{"id":"139","name":"永年县","parentid":"77"},
{"id":"140","name":"邱县","parentid":"77"},
{"id":"141","name":"鸡泽县","parentid":"77"},
{"id":"142","name":"广平县","parentid":"77"},
{"id":"143","name":"馆陶县","parentid":"77"},
{"id":"144","name":"魏县","parentid":"77"},
{"id":"145","name":"曲周县","parentid":"77"},
{"id":"146","name":"武安市","parentid":"77"},
{"id":"147","name":"桥东区","parentid":"78"},
{"id":"148","name":"桥西区","parentid":"78"},
{"id":"149","name":"邢台县","parentid":"78"},
{"id":"150","name":"临城县","parentid":"78"},
{"id":"151","name":"内丘县","parentid":"78"},
{"id":"152","name":"柏乡县","parentid":"78"},
{"id":"153","name":"隆尧县","parentid":"78"},
{"id":"154","name":"任县","parentid":"78"},
{"id":"155","name":"南和县","parentid":"78"},
{"id":"156","name":"宁晋县","parentid":"78"},
{"id":"157","name":"巨鹿县","parentid":"78"},
{"id":"158","name":"新河县","parentid":"78"},
{"id":"159","name":"广宗县","parentid":"78"},
{"id":"160","name":"威县","parentid":"78"},
{"id":"161","name":"清河县","parentid":"78"},
{"id":"162","name":"临西县","parentid":"78"},
{"id":"163","name":"南宫市","parentid":"78"},
{"id":"164","name":"沙河市","parentid":"78"},
{"id":"165","name":"新市区","parentid":"79"},
{"id":"166","name":"北市区","parentid":"79"},
{"id":"167","name":"南市区","parentid":"79"},
{"id":"168","name":"满城区","parentid":"79"},
{"id":"169","name":"清苑县","parentid":"79"},
{"id":"170","name":"涞水县","parentid":"79"},
{"id":"171","name":"阜平县","parentid":"79"},
{"id":"172","name":"徐水县","parentid":"79"},
{"id":"173","name":"定兴县","parentid":"79"},
{"id":"174","name":"唐县","parentid":"79"},
{"id":"175","name":"高阳县","parentid":"79"},
{"id":"176","name":"容城县","parentid":"79"},
{"id":"177","name":"涞源县","parentid":"79"},
{"id":"178","name":"望都县","parentid":"79"},
{"id":"179","name":"安新县","parentid":"79"},
{"id":"180","name":"易县","parentid":"79"},
{"id":"181","name":"曲阳县","parentid":"79"},
{"id":"182","name":"蠡县","parentid":"79"},
{"id":"183","name":"顺平县","parentid":"79"},
{"id":"184","name":"博野县","parentid":"79"},
{"id":"185","name":"雄县","parentid":"79"},
{"id":"186","name":"涿州市","parentid":"79"},
{"id":"187","name":"定州市","parentid":"79"},
{"id":"188","name":"安国市","parentid":"79"},
{"id":"189","name":"高碑店市","parentid":"79"},
{"id":"190","name":"桥东区","parentid":"80"},
{"id":"191","name":"桥西区","parentid":"80"},
{"id":"192","name":"宣化区","parentid":"80"},
{"id":"193","name":"下花园区","parentid":"80"},
{"id":"194","name":"宣化县","parentid":"80"},
{"id":"195","name":"张北县","parentid":"80"},
{"id":"196","name":"康保县","parentid":"80"},
{"id":"197","name":"沽源县","parentid":"80"},
{"id":"198","name":"尚义县","parentid":"80"},
{"id":"199","name":"魏县","parentid":"80"},
{"id":"200","name":"阳原县","parentid":"80"},
{"id":"201","name":"怀安县","parentid":"80"},
{"id":"202","name":"万全县","parentid":"80"},
{"id":"203","name":"怀来县","parentid":"80"},
{"id":"204","name":"涿鹿县","parentid":"80"},
{"id":"205","name":"赤城县","parentid":"80"},
{"id":"206","name":"崇礼县","parentid":"80"},
{"id":"207","name":"双桥区","parentid":"81"},
{"id":"208","name":"双滦区","parentid":"81"},
{"id":"209","name":"鹰手营子矿区","parentid":"81"},
{"id":"210","name":"承德县","parentid":"81"},
{"id":"211","name":"兴隆县","parentid":"81"},
{"id":"212","name":"平泉县","parentid":"81"},
{"id":"213","name":"滦平县","parentid":"81"},
{"id":"214","name":"隆化县","parentid":"81"},
{"id":"215","name":"丰宁满族自治县","parentid":"81"},
{"id":"216","name":"宽城满族自治县","parentid":"81"},
{"id":"217","name":"围场满族蒙古族自治县","parentid":"81"},
{"id":"218","name":"新华区","parentid":"82"},
{"id":"219","name":"运河区","parentid":"82"},
{"id":"220","name":"沧县","parentid":"82"},
{"id":"221","name":"青县","parentid":"82"},
{"id":"222","name":"东光县","parentid":"82"},
{"id":"223","name":"海兴县","parentid":"82"},
{"id":"224","name":"盐山县","parentid":"82"},
{"id":"225","name":"肃宁县","parentid":"82"},
{"id":"226","name":"南皮县","parentid":"82"},
{"id":"227","name":"吴桥县","parentid":"82"},
{"id":"228","name":"献县","parentid":"82"},
{"id":"229","name":"孟村回族自治县","parentid":"82"},
{"id":"230","name":"泊头市","parentid":"82"},
{"id":"231","name":"黄骅市","parentid":"82"},
{"id":"232","name":"河间市","parentid":"82"},
{"id":"233","name":"安次区","parentid":"83"},
{"id":"234","name":"广阳区","parentid":"83"},
{"id":"235","name":"固安县","parentid":"83"},
{"id":"236","name":"永清县","parentid":"83"},
{"id":"237","name":"香河县","parentid":"83"},
{"id":"238","name":"大城县","parentid":"83"},
{"id":"239","name":"文安县","parentid":"83"},
{"id":"240","name":"大厂回族自治县","parentid":"83"},
{"id":"241","name":"霸州市","parentid":"83"},
{"id":"242","name":"三河市","parentid":"83"},
{"id":"243","name":"桃城区","parentid":"84"},
{"id":"244","name":"枣强县","parentid":"84"},
{"id":"245","name":"武邑县","parentid":"84"},
{"id":"246","name":"武强县","parentid":"84"},
{"id":"247","name":"饶阳县","parentid":"84"},
{"id":"248","name":"安平县","parentid":"84"},
{"id":"249","name":"故城县","parentid":"84"},
{"id":"250","name":"景县","parentid":"84"},
{"id":"251","name":"阜城县","parentid":"84"},
{"id":"252","name":"冀州市","parentid":"84"},
{"id":"253","name":"深州市","parentid":"84"},
];