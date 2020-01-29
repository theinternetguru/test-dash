
//-----------------
// data
//-----------------

M.datapath = document.location.host.match(/github|coronavirus\.analitik\.my/i)
							? 'https://raw.githubusercontent.com/nyem69/coronavirus_dashboard/master/_data'
							: (typeof _v=='number'?'../':'')+'_data';


M.config = {

	data: {

		live:0,

		ref:[
			{ key:'countries', 			type:'tsv', 	url: M.datapath+'/dd_countries.tsv'},
		],

		cold: [
//			{ key:'bno', 						type:'text', 	url: M.datapath+'/bno/20200125-bno.txt'},
//			{ key:'jhu', 						type:'csv', 	url: M.datapath+'/jhu/jhu-20200125.csv'},
//			{ key:'martine', 				type:'csv', 	url: M.datapath+'/martinedoesgis/martinedoesgis-20200125.csv'},
			{
				key:'martine',
				type:'csv',
				url: 'https://docs.google.com/spreadsheets/d/18X1VM1671d99V_yd-cnUI1j8oSG2ZgfU_q1HfOizErA/gviz/tq?tqx=out:csv&sheet=data_adm1',
				label:'MartineDoesGIS',
				site:'',
			},

			{
				key:'tencent',
				type:'json',
				url:'https://view.inews.qq.com/g2/getOnsInfo?name=wuwei_ww_area_counts&callback=&_=',
				cors:true,
			},


		],

		hot: [
			{
				key:'bno',
				type:'text',
				url:'https://raw.githubusercontent.com/globalcitizen/2019-wuhan-coronavirus-data/master/data-sources/bno/data/20200125-055800-bno-2019ncov-data.csv',
			},
			{
				key:'virological-sheet1',
				type:'csv',
				url:'https://docs.google.com/spreadsheets/d/1itaohdPiAeniCXNlntNztZ_oRvjh0HsGuJXUJWET008/gviz/tq?tqx=out:csv&sheet=outside_Hubei',
			},
			{
				key:'virological-sheet2',
				type:'csv',
				url:'https://docs.google.com/spreadsheets/d/1itaohdPiAeniCXNlntNztZ_oRvjh0HsGuJXUJWET008/gviz/tq?tqx=out:csv&sheet=Hubei',
			},
		],


		//https://docs.google.com/spreadsheets/d/18X1VM1671d99V_yd-cnUI1j8oSG2ZgfU_q1HfOizErA/edit#gid=0

		worksheets:[
			{
				key:'virological-worksheet',
				type:'xml',
				url:'https://spreadsheets.google.com/feeds/worksheets/1itaohdPiAeniCXNlntNztZ_oRvjh0HsGuJXUJWET008/private/full',

			},
		],

	},


	theme:{

		colors:[
			['purple','crimson','#5C3292'],
		],

	},


};






//-----------------
// M.themeColors
//-----------------

if (!M.current.theme) M.current.theme = 0;
if (!M.config.theme.colors[+M.current.theme]) M.current.theme = 0;
M.theme={
	colors: M.config.theme.colors[+M.current.theme],
};



