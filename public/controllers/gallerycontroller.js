var galleryapp = angular.module('galleryapp', []);



galleryapp.controller('gallerycontroller', ['$scope', '$http', function($scope, $http) {
   
   console.log("Hello World from controller");
    
   //var listofimages = ["album1/DGR-1-147", "album1/DGR-1-141", "album1/DGR-1-106"];
   var listofimages = new Array();
   var listofpics = new Array();
   var listofnames = new Array();

   $http.get('/albumnames', $scope.listofnames).then(function(response){
		console.log(response);
		$scope.listofnames = response.data;
		console.log($scope.listofnames);
		listofnames = $scope.listofnames;
		console.log(listofnames);
	});	


   $http.get('/albumpics', $scope.listofimages).then(function(response){
		console.log(response);
		$scope.listofimages = response.data;
		console.log($scope.listofimages);
		listofimages = $scope.listofimages;
		console.log(listofimages);

$scope.options1 = {
    langs: [
      { link:  'albums/' + listofnames[0] +'/' + listofimages[0] + ''},
      { link:  'albums/' + listofnames[0] +'/' + listofimages[1] + ''},
      { link:  'albums/' + listofnames[0] +'/' + listofimages[2] + ''},
      { link:  'albums/' + listofnames[0] +'/' + listofimages[3] + ''},
      { link:  'albums/' + listofnames[0] +'/' + listofimages[4] + ''},
      { link:  'albums/' + listofnames[0] +'/' + listofimages[5] + ''},
      { link:  'albums/' + listofnames[0] +'/' + listofimages[6] + ''},
      { link:  'albums/' + listofnames[0] +'/' + listofimages[7] + ''},
      { link:  'albums/' + listofnames[0] +'/' + listofimages[8] + ''},
      { link:  'albums/' + listofnames[0] +'/' + listofimages[9] + ''},
      { link:  'albums/' + listofnames[0] +'/' + listofimages[10] + ''},
      { link:  'albums/' + listofnames[0] +'/' + listofimages[11] + ''},
      { link:  'albums/' + listofnames[0] +'/' + listofimages[12] + ''},
      { link:  'albums/' + listofnames[0] +'/' + listofimages[13] + ''},
      { link:  'albums/' + listofnames[0] +'/' + listofimages[14] + ''},
      { link:  'albums/' + listofnames[0] +'/' + listofimages[15] + ''},
      { link:  'albums/' + listofnames[0] +'/' + listofimages[16] + ''},
      { link:  'albums/' + listofnames[0] +'/' + listofimages[17] + ''},
      { link:  'albums/' + listofnames[0] +'/' + listofimages[18] + ''},
      { link:  'albums/' + listofnames[0] +'/' + listofimages[19] + ''},
    ]
  }

$scope.options2 = {
    langs: [
      { link:  'albums/' + listofnames[1] +'/' + listofimages[20] + ''},
      { link:  'albums/' + listofnames[1] +'/' + listofimages[21] + ''},
      { link:  'albums/' + listofnames[1] +'/' + listofimages[22] + ''},
      { link:  'albums/' + listofnames[1] +'/' + listofimages[23] + ''},
      { link:  'albums/' + listofnames[1] +'/' + listofimages[24] + ''},
      { link:  'albums/' + listofnames[1] +'/' + listofimages[25] + ''},
      { link:  'albums/' + listofnames[1] +'/' + listofimages[26] + ''},
      { link:  'albums/' + listofnames[1] +'/' + listofimages[27] + ''},
      { link:  'albums/' + listofnames[1] +'/' + listofimages[28] + ''},
      { link:  'albums/' + listofnames[1] +'/' + listofimages[29] + ''},
      { link:  'albums/' + listofnames[1] +'/' + listofimages[30] + ''},
      { link:  'albums/' + listofnames[1] +'/' + listofimages[31] + ''},
      { link:  'albums/' + listofnames[1] +'/' + listofimages[32] + ''},
      { link:  'albums/' + listofnames[1] +'/' + listofimages[33] + ''},
      { link:  'albums/' + listofnames[1] +'/' + listofimages[34] + ''},
      { link:  'albums/' + listofnames[1] +'/' + listofimages[35] + ''},
      { link:  'albums/' + listofnames[1] +'/' + listofimages[36] + ''},
      { link:  'albums/' + listofnames[1] +'/' + listofimages[37] + ''},
      { link:  'albums/' + listofnames[1] +'/' + listofimages[38] + ''},
      { link:  'albums/' + listofnames[1] +'/' + listofimages[39] + ''},
    ]
  }
  
$scope.options3 = {
    langs: [

      { link:  'albums/' + listofnames[2] +'/' + listofimages[40] + ''},
      { link:  'albums/' + listofnames[2] +'/' + listofimages[41] + ''},
      { link:  'albums/' + listofnames[2] +'/' + listofimages[42] + ''},
      { link:  'albums/' + listofnames[2] +'/' + listofimages[43] + ''},
      { link:  'albums/' + listofnames[2] +'/' + listofimages[44] + ''},
      { link:  'albums/' + listofnames[2] +'/' + listofimages[45] + ''},
      { link:  'albums/' + listofnames[2] +'/' + listofimages[46] + ''},
      { link:  'albums/' + listofnames[2] +'/' + listofimages[47] + ''},
      { link:  'albums/' + listofnames[2] +'/' + listofimages[48] + ''},
      { link:  'albums/' + listofnames[2] +'/' + listofimages[49] + ''},
      { link:  'albums/' + listofnames[2] +'/' + listofimages[50] + ''},
      { link:  'albums/' + listofnames[2] +'/' + listofimages[51] + ''},
      { link:  'albums/' + listofnames[2] +'/' + listofimages[52] + ''},
      { link:  'albums/' + listofnames[2] +'/' + listofimages[53] + ''},
      { link:  'albums/' + listofnames[2] +'/' + listofimages[54] + ''},
      { link:  'albums/' + listofnames[2] +'/' + listofimages[55] + ''},
      { link:  'albums/' + listofnames[2] +'/' + listofimages[56] + ''},
      { link:  'albums/' + listofnames[2] +'/' + listofimages[57] + ''},
      { link:  'albums/' + listofnames[2] +'/' + listofimages[58] + ''},
      { link:  'albums/' + listofnames[2] +'/' + listofimages[59] + ''},
    ]
  }
  
$scope.options4 = {
    langs: [    

      { link:  'albums/' + listofnames[3] +'/' + listofimages[60] + ''},
      { link:  'albums/' + listofnames[3] +'/' + listofimages[61] + ''},
      { link:  'albums/' + listofnames[3] +'/' + listofimages[62] + ''},
      { link:  'albums/' + listofnames[3] +'/' + listofimages[63] + ''},
      { link:  'albums/' + listofnames[3] +'/' + listofimages[64] + ''},
      { link:  'albums/' + listofnames[3] +'/' + listofimages[65] + ''},
      { link:  'albums/' + listofnames[3] +'/' + listofimages[66] + ''},
      { link:  'albums/' + listofnames[3] +'/' + listofimages[67] + ''},
      { link:  'albums/' + listofnames[3] +'/' + listofimages[68] + ''},
      { link:  'albums/' + listofnames[3] +'/' + listofimages[69] + ''},
      { link:  'albums/' + listofnames[3] +'/' + listofimages[70] + ''},
      { link:  'albums/' + listofnames[3] +'/' + listofimages[71] + ''},
      { link:  'albums/' + listofnames[3] +'/' + listofimages[72] + ''},
      { link:  'albums/' + listofnames[3] +'/' + listofimages[73] + ''},
      { link:  'albums/' + listofnames[3] +'/' + listofimages[74] + ''},
      { link:  'albums/' + listofnames[3] +'/' + listofimages[75] + ''},
      { link:  'albums/' + listofnames[3] +'/' + listofimages[76] + ''},
      { link:  'albums/' + listofnames[3] +'/' + listofimages[77] + ''},
      { link:  'albums/' + listofnames[3] +'/' + listofimages[78] + ''},
      { link:  'albums/' + listofnames[3] +'/' + listofimages[79] + ''},
    ]
  }
  
$scope.options5 = {
    langs: [

      { link:  'albums/' + listofnames[4] +'/' + listofimages[80] + ''},
      { link:  'albums/' + listofnames[4] +'/' + listofimages[81] + ''},
      { link:  'albums/' + listofnames[4] +'/' + listofimages[82] + ''},
      { link:  'albums/' + listofnames[4] +'/' + listofimages[83] + ''},
      { link:  'albums/' + listofnames[4] +'/' + listofimages[84] + ''},
      { link:  'albums/' + listofnames[4] +'/' + listofimages[85] + ''},
      { link:  'albums/' + listofnames[4] +'/' + listofimages[86] + ''},
      { link:  'albums/' + listofnames[4] +'/' + listofimages[87] + ''},
      { link:  'albums/' + listofnames[4] +'/' + listofimages[88] + ''},
      { link:  'albums/' + listofnames[4] +'/' + listofimages[89] + ''},
      { link:  'albums/' + listofnames[4] +'/' + listofimages[90] + ''},
      { link:  'albums/' + listofnames[4] +'/' + listofimages[91] + ''},
      { link:  'albums/' + listofnames[4] +'/' + listofimages[92] + ''},
      { link:  'albums/' + listofnames[4] +'/' + listofimages[93] + ''},
      { link:  'albums/' + listofnames[4] +'/' + listofimages[94] + ''},
      { link:  'albums/' + listofnames[4] +'/' + listofimages[95] + ''},
      { link:  'albums/' + listofnames[4] +'/' + listofimages[96] + ''},
      { link:  'albums/' + listofnames[4] +'/' + listofimages[97] + ''},
      { link:  'albums/' + listofnames[4] +'/' + listofimages[98] + ''},
      { link:  'albums/' + listofnames[4] +'/' + listofimages[99] + ''},
    ]
  }
  
$scope.options6 = {
    langs: [

      { link:  'albums/' + listofnames[5] +'/' + listofimages[100] + ''},
      { link:  'albums/' + listofnames[5] +'/' + listofimages[101] + ''},
      { link:  'albums/' + listofnames[5] +'/' + listofimages[102] + ''},
      { link:  'albums/' + listofnames[5] +'/' + listofimages[103] + ''},
      { link:  'albums/' + listofnames[5] +'/' + listofimages[104] + ''},
      { link:  'albums/' + listofnames[5] +'/' + listofimages[105] + ''},
      { link:  'albums/' + listofnames[5] +'/' + listofimages[106] + ''},
      { link:  'albums/' + listofnames[5] +'/' + listofimages[107] + ''},
      { link:  'albums/' + listofnames[5] +'/' + listofimages[108] + ''},
      { link:  'albums/' + listofnames[5] +'/' + listofimages[109] + ''},
      { link:  'albums/' + listofnames[5] +'/' + listofimages[110] + ''},
      { link:  'albums/' + listofnames[5] +'/' + listofimages[111] + ''},
      { link:  'albums/' + listofnames[5] +'/' + listofimages[112] + ''},
      { link:  'albums/' + listofnames[5] +'/' + listofimages[113] + ''},
      { link:  'albums/' + listofnames[5] +'/' + listofimages[114] + ''},
      { link:  'albums/' + listofnames[5] +'/' + listofimages[115] + ''},
      { link:  'albums/' + listofnames[5] +'/' + listofimages[116] + ''},
      { link:  'albums/' + listofnames[5] +'/' + listofimages[117] + ''},
      { link:  'albums/' + listofnames[5] +'/' + listofimages[118] + ''},
      { link:  'albums/' + listofnames[5] +'/' + listofimages[119] + ''}, 
    ]
  }
  
$scope.options7 = {
    langs: [

      { link:  'albums/' + listofnames[6] +'/' + listofimages[120] + ''},
      { link:  'albums/' + listofnames[6] +'/' + listofimages[121] + ''},
      { link:  'albums/' + listofnames[6] +'/' + listofimages[122] + ''},
      { link:  'albums/' + listofnames[6] +'/' + listofimages[123] + ''},
      { link:  'albums/' + listofnames[6] +'/' + listofimages[124] + ''},
      { link:  'albums/' + listofnames[6] +'/' + listofimages[125] + ''},
      { link:  'albums/' + listofnames[6] +'/' + listofimages[126] + ''},
      { link:  'albums/' + listofnames[6] +'/' + listofimages[127] + ''},
      { link:  'albums/' + listofnames[6] +'/' + listofimages[128] + ''},
      { link:  'albums/' + listofnames[6] +'/' + listofimages[129] + ''},
      { link:  'albums/' + listofnames[6] +'/' + listofimages[130] + ''},
      { link:  'albums/' + listofnames[6] +'/' + listofimages[131] + ''},
      { link:  'albums/' + listofnames[6] +'/' + listofimages[132] + ''},
      { link:  'albums/' + listofnames[6] +'/' + listofimages[133] + ''},
      { link:  'albums/' + listofnames[6] +'/' + listofimages[134] + ''},
      { link:  'albums/' + listofnames[6] +'/' + listofimages[135] + ''},
      { link:  'albums/' + listofnames[6] +'/' + listofimages[136] + ''},
      { link:  'albums/' + listofnames[6] +'/' + listofimages[137] + ''},
      { link:  'albums/' + listofnames[6] +'/' + listofimages[138] + ''},
      { link:  'albums/' + listofnames[6] +'/' + listofimages[139] + ''},
    ]
  }
  
$scope.options8 = {
    langs: [

      { link:  'albums/' + listofnames[7] +'/' + listofimages[140] + ''},
      { link:  'albums/' + listofnames[7] +'/' + listofimages[141] + ''},
      { link:  'albums/' + listofnames[7] +'/' + listofimages[142] + ''},
      { link:  'albums/' + listofnames[7] +'/' + listofimages[143] + ''},
      { link:  'albums/' + listofnames[7] +'/' + listofimages[144] + ''},
      { link:  'albums/' + listofnames[7] +'/' + listofimages[145] + ''},
      { link:  'albums/' + listofnames[7] +'/' + listofimages[146] + ''},
      { link:  'albums/' + listofnames[7] +'/' + listofimages[147] + ''},
      { link:  'albums/' + listofnames[7] +'/' + listofimages[148] + ''},
      { link:  'albums/' + listofnames[7] +'/' + listofimages[149] + ''},
      { link:  'albums/' + listofnames[7] +'/' + listofimages[150] + ''},
      { link:  'albums/' + listofnames[7] +'/' + listofimages[151] + ''},
      { link:  'albums/' + listofnames[7] +'/' + listofimages[152] + ''},
      { link:  'albums/' + listofnames[7] +'/' + listofimages[153] + ''},
      { link:  'albums/' + listofnames[7] +'/' + listofimages[154] + ''},
      { link:  'albums/' + listofnames[7] +'/' + listofimages[155] + ''},
      { link:  'albums/' + listofnames[7] +'/' + listofimages[156] + ''},
      { link:  'albums/' + listofnames[7] +'/' + listofimages[157] + ''},
      { link:  'albums/' + listofnames[7] +'/' + listofimages[158] + ''},
      { link:  'albums/' + listofnames[7] +'/' + listofimages[159] + ''},
    ]
  }
  
$scope.options9 = {
    langs: [

      { link:  'albums/' + listofnames[8] +'/' + listofimages[160] + ''},
      { link:  'albums/' + listofnames[8] +'/' + listofimages[161] + ''},
      { link:  'albums/' + listofnames[8] +'/' + listofimages[162] + ''},
      { link:  'albums/' + listofnames[8] +'/' + listofimages[163] + ''},
      { link:  'albums/' + listofnames[8] +'/' + listofimages[164] + ''},
      { link:  'albums/' + listofnames[8] +'/' + listofimages[165] + ''},
      { link:  'albums/' + listofnames[8] +'/' + listofimages[166] + ''},
      { link:  'albums/' + listofnames[8] +'/' + listofimages[167] + ''},
      { link:  'albums/' + listofnames[8] +'/' + listofimages[168] + ''},
      { link:  'albums/' + listofnames[8] +'/' + listofimages[169] + ''},
      { link:  'albums/' + listofnames[8] +'/' + listofimages[170] + ''},
      { link:  'albums/' + listofnames[8] +'/' + listofimages[171] + ''},
      { link:  'albums/' + listofnames[8] +'/' + listofimages[172] + ''},
      { link:  'albums/' + listofnames[8] +'/' + listofimages[173] + ''},
      { link:  'albums/' + listofnames[8] +'/' + listofimages[174] + ''},
      { link:  'albums/' + listofnames[8] +'/' + listofimages[175] + ''},
      { link:  'albums/' + listofnames[8] +'/' + listofimages[176] + ''},
      { link:  'albums/' + listofnames[8] +'/' + listofimages[177] + ''},
      { link:  'albums/' + listofnames[8] +'/' + listofimages[178] + ''},
      { link:  'albums/' + listofnames[8] +'/' + listofimages[179] + ''},
    ]
  }
  
$scope.options10 = {
    langs: [

      { link:  'albums/' + listofnames[9] +'/' + listofimages[180] + ''},
      { link:  'albums/' + listofnames[9] +'/' + listofimages[181] + ''},
      { link:  'albums/' + listofnames[9] +'/' + listofimages[182] + ''},
      { link:  'albums/' + listofnames[9] +'/' + listofimages[183] + ''},
      { link:  'albums/' + listofnames[9] +'/' + listofimages[184] + ''},
      { link:  'albums/' + listofnames[9] +'/' + listofimages[185] + ''},
      { link:  'albums/' + listofnames[9] +'/' + listofimages[186] + ''},
      { link:  'albums/' + listofnames[9] +'/' + listofimages[187] + ''},
      { link:  'albums/' + listofnames[9] +'/' + listofimages[188] + ''},
      { link:  'albums/' + listofnames[9] +'/' + listofimages[189] + ''},
      { link:  'albums/' + listofnames[9] +'/' + listofimages[190] + ''},
      { link:  'albums/' + listofnames[9] +'/' + listofimages[191] + ''},
      { link:  'albums/' + listofnames[9] +'/' + listofimages[192] + ''},
      { link:  'albums/' + listofnames[9] +'/' + listofimages[193] + ''},
      { link:  'albums/' + listofnames[9] +'/' + listofimages[194] + ''},
      { link:  'albums/' + listofnames[9] +'/' + listofimages[195] + ''},
      { link:  'albums/' + listofnames[9] +'/' + listofimages[196] + ''},
      { link:  'albums/' + listofnames[9] +'/' + listofimages[197] + ''},
      { link:  'albums/' + listofnames[9] +'/' + listofimages[198] + ''},
      { link:  'albums/' + listofnames[9] +'/' + listofimages[199] + ''},
    ]
  }
  
$scope.options11 = {
    langs: [

      { link:  'albums/' + listofnames[10] +'/' + listofimages[200] + ''},
      { link:  'albums/' + listofnames[10] +'/' + listofimages[201] + ''},
      { link:  'albums/' + listofnames[10] +'/' + listofimages[202] + ''},
      { link:  'albums/' + listofnames[10] +'/' + listofimages[203] + ''},
      { link:  'albums/' + listofnames[10] +'/' + listofimages[204] + ''},
      { link:  'albums/' + listofnames[10] +'/' + listofimages[205] + ''},
      { link:  'albums/' + listofnames[10] +'/' + listofimages[206] + ''},
      { link:  'albums/' + listofnames[10] +'/' + listofimages[207] + ''},
      { link:  'albums/' + listofnames[10] +'/' + listofimages[208] + ''},
      { link:  'albums/' + listofnames[10] +'/' + listofimages[209] + ''},
      { link:  'albums/' + listofnames[10] +'/' + listofimages[210] + ''},
      { link:  'albums/' + listofnames[10] +'/' + listofimages[211] + ''},
      { link:  'albums/' + listofnames[10] +'/' + listofimages[212] + ''},
      { link:  'albums/' + listofnames[10] +'/' + listofimages[213] + ''},
      { link:  'albums/' + listofnames[10] +'/' + listofimages[214] + ''},
      { link:  'albums/' + listofnames[10] +'/' + listofimages[215] + ''},
      { link:  'albums/' + listofnames[10] +'/' + listofimages[216] + ''},
      { link:  'albums/' + listofnames[10] +'/' + listofimages[217] + ''},
      { link:  'albums/' + listofnames[10] +'/' + listofimages[218] + ''},
      { link:  'albums/' + listofnames[10] +'/' + listofimages[219] + ''},   
    ]
  }
  
$scope.options12 = {
    langs: [      

      { link:  'albums/' + listofnames[11] +'/' + listofimages[230] + ''},
      { link:  'albums/' + listofnames[11] +'/' + listofimages[231] + ''},
      { link:  'albums/' + listofnames[11] +'/' + listofimages[232] + ''},
      { link:  'albums/' + listofnames[11] +'/' + listofimages[233] + ''},
      { link:  'albums/' + listofnames[11] +'/' + listofimages[234] + ''},
      { link:  'albums/' + listofnames[11] +'/' + listofimages[235] + ''},
      { link:  'albums/' + listofnames[11] +'/' + listofimages[236] + ''},
      { link:  'albums/' + listofnames[11] +'/' + listofimages[237] + ''},
      { link:  'albums/' + listofnames[11] +'/' + listofimages[238] + ''},
      { link:  'albums/' + listofnames[11] +'/' + listofimages[239] + ''},
      { link:  'albums/' + listofnames[11] +'/' + listofimages[240] + ''},
      { link:  'albums/' + listofnames[11] +'/' + listofimages[241] + ''},
      { link:  'albums/' + listofnames[11] +'/' + listofimages[242] + ''},
      { link:  'albums/' + listofnames[11] +'/' + listofimages[243] + ''},
      { link:  'albums/' + listofnames[11] +'/' + listofimages[244] + ''},
      { link:  'albums/' + listofnames[11] +'/' + listofimages[245] + ''},
      { link:  'albums/' + listofnames[11] +'/' + listofimages[246] + ''},
      { link:  'albums/' + listofnames[11] +'/' + listofimages[247] + ''},
      { link:  'albums/' + listofnames[11] +'/' + listofimages[248] + ''},
      { link:  'albums/' + listofnames[11] +'/' + listofimages[249] + ''},
    ]
  }
  
$scope.options13 = {
    langs: [

      { link:  'albums/' + listofnames[12] +'/' + listofimages[250] + ''},
      { link:  'albums/' + listofnames[12] +'/' + listofimages[251] + ''},
      { link:  'albums/' + listofnames[12] +'/' + listofimages[252] + ''},
      { link:  'albums/' + listofnames[12] +'/' + listofimages[253] + ''},
      { link:  'albums/' + listofnames[12] +'/' + listofimages[254] + ''},
      { link:  'albums/' + listofnames[12] +'/' + listofimages[255] + ''},
      { link:  'albums/' + listofnames[12] +'/' + listofimages[256] + ''},
      { link:  'albums/' + listofnames[12] +'/' + listofimages[257] + ''},
      { link:  'albums/' + listofnames[12] +'/' + listofimages[258] + ''},
      { link:  'albums/' + listofnames[12] +'/' + listofimages[259] + ''},
      { link:  'albums/' + listofnames[12] +'/' + listofimages[260] + ''},
      { link:  'albums/' + listofnames[12] +'/' + listofimages[261] + ''},
      { link:  'albums/' + listofnames[12] +'/' + listofimages[262] + ''},
      { link:  'albums/' + listofnames[12] +'/' + listofimages[263] + ''},
      { link:  'albums/' + listofnames[12] +'/' + listofimages[264] + ''},
      { link:  'albums/' + listofnames[12] +'/' + listofimages[265] + ''},
      { link:  'albums/' + listofnames[12] +'/' + listofimages[266] + ''},
      { link:  'albums/' + listofnames[12] +'/' + listofimages[267] + ''},
      { link:  'albums/' + listofnames[12] +'/' + listofimages[268] + ''},
      { link:  'albums/' + listofnames[12] +'/' + listofimages[269] + ''},
    ]
  }
  
$scope.options14 = {
    langs: [

      { link:  'albums/' + listofnames[13] +'/' + listofimages[270] + ''},
      { link:  'albums/' + listofnames[13] +'/' + listofimages[271] + ''},
      { link:  'albums/' + listofnames[13] +'/' + listofimages[272] + ''},
      { link:  'albums/' + listofnames[13] +'/' + listofimages[273] + ''},
      { link:  'albums/' + listofnames[13] +'/' + listofimages[274] + ''},
      { link:  'albums/' + listofnames[13] +'/' + listofimages[275] + ''},
      { link:  'albums/' + listofnames[13] +'/' + listofimages[276] + ''},
      { link:  'albums/' + listofnames[13] +'/' + listofimages[277] + ''},
      { link:  'albums/' + listofnames[13] +'/' + listofimages[278] + ''},
      { link:  'albums/' + listofnames[13] +'/' + listofimages[279] + ''},
      { link:  'albums/' + listofnames[13] +'/' + listofimages[280] + ''},
      { link:  'albums/' + listofnames[13] +'/' + listofimages[281] + ''},
      { link:  'albums/' + listofnames[13] +'/' + listofimages[282] + ''},
      { link:  'albums/' + listofnames[13] +'/' + listofimages[283] + ''},
      { link:  'albums/' + listofnames[13] +'/' + listofimages[284] + ''},
      { link:  'albums/' + listofnames[13] +'/' + listofimages[285] + ''},
      { link:  'albums/' + listofnames[13] +'/' + listofimages[286] + ''},
      { link:  'albums/' + listofnames[13] +'/' + listofimages[287] + ''},
      { link:  'albums/' + listofnames[13] +'/' + listofimages[288] + ''},
      { link:  'albums/' + listofnames[13] +'/' + listofimages[289] + ''},
    ]
  }
  
$scope.options15 = {
    langs: [

      { link:  'albums/' + listofnames[14] +'/' + listofimages[290] + ''},
      { link:  'albums/' + listofnames[14] +'/' + listofimages[291] + ''},
      { link:  'albums/' + listofnames[14] +'/' + listofimages[292] + ''},
      { link:  'albums/' + listofnames[14] +'/' + listofimages[293] + ''},
      { link:  'albums/' + listofnames[14] +'/' + listofimages[294] + ''},
      { link:  'albums/' + listofnames[14] +'/' + listofimages[295] + ''},
      { link:  'albums/' + listofnames[14] +'/' + listofimages[296] + ''},
      { link:  'albums/' + listofnames[14] +'/' + listofimages[297] + ''},
      { link:  'albums/' + listofnames[14] +'/' + listofimages[298] + ''},
      { link:  'albums/' + listofnames[14] +'/' + listofimages[299] + ''},
      { link:  'albums/' + listofnames[14] +'/' + listofimages[300] + ''},
      { link:  'albums/' + listofnames[14] +'/' + listofimages[301] + ''},
      { link:  'albums/' + listofnames[14] +'/' + listofimages[302] + ''},
      { link:  'albums/' + listofnames[14] +'/' + listofimages[303] + ''},
      { link:  'albums/' + listofnames[14] +'/' + listofimages[304] + ''},
      { link:  'albums/' + listofnames[14] +'/' + listofimages[305] + ''},
      { link:  'albums/' + listofnames[14] +'/' + listofimages[306] + ''},
      { link:  'albums/' + listofnames[14] +'/' + listofimages[307] + ''},
      { link:  'albums/' + listofnames[14] +'/' + listofimages[308] + ''},
      { link:  'albums/' + listofnames[14] +'/' + listofimages[309] + ''},
    ]
  }
  




	});
	

 	





    
}]);