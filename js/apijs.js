var ref=null;
		var ref1=null;
		//库存统计 5min/次
		function inventoryInfoStatisitc(){
			function statistic(){
				$.ajax({
					url: "http://localhost:10837/api/BMS/InventoryInfoApi",
					method: 'get',
					dataType: '',
					success: function(data) {
							$("li[name='normalinventory']").html(data[0]);
							$("li[name='warn_inventory']").html(data[1]);
							$("li[name='expired_inventory']").html(data[2]);
							},
						})
					};
					statistic();
					setInterval(statistic,300000)
		}
		//库存明细 5min/次
		function inventoryDetail(){
			function getInfo(){
				$.ajax({
						url: "http://localhost:10837/api/BMS/InventoryDetailApi",
						method: 'get',
						dataType: '',
						success: function(data) {
							let leng=data.length;
							let str="";
							for(let i=0; i<data.length;i++)
							{
								let column="";
								let pic=data[i][0]+".png";
								let foodName=data[i][1];
								let normalInventory=Number.parseInt(data[i][2]);
								let inventory=Number.parseInt(data[i][3]);
								let minInventory=Number.parseInt(data[i][4]);
								let wid=normalInventory/inventory*50;
								let wid1=wid+"px";
								if(inventory<=minInventory){
									column="bar3";
								}else{
									column="bar1";
								}
								if(data[i][1].length<=6)
								{
							   let doc="<li class=\"clearfix\"> <span class=\"pulll_left\"><img src=\"img/"+pic+"\">"+foodName+"</span>\n"+
									"<div class="+column+" style=\"width:"+wid1+"\"></div><span class=\"pulll_right\" >"+normalInventory+"</span>\n"+
							   "</li>";
							   str+=doc;
							   }else{
								  let doc= "<li class=\"clearfix\"> <span class=\"pulll_left\"><img src=\"img/"+pic+"\"></span><span class=\"pulll_left_right\" style=\"height: 70px; !important\"><marquee>"+foodName+"</marquee></span>\n"+
								   	"<div class="+column+" style=\"width:"+wid1+"\"></div><span class=\"pulll_right \">"+normalInventory+"</span>\n"+
								   "</li>"
								str+=doc;
							   }
							}
							document.querySelector("#ul1").innerHTML=str;
							if(leng>32){
								if(ref1)  clearInterval(ref1);
								loadScrollTable1('FoodStockInfo');
							}
							 }
						})
			}
			getInfo();
			setInterval(getInfo,300000);
		}
		//临期过期菜品信息 5min/次
		function warnInventoryInfo(){
			function warnInfo(){
				$.ajax({
					url: "http://localhost:10837/api/BMS/WarnInventoryDetailApi",
					method: 'get',
					dataType: '',
					success: function(data){
						let leng=data.length;
						let str="";
						for(let i=0;i<data.length;i++){
							let pic=data[i][0]+".png";
							if(data[i][1].length<=6)
							{
								let doc="<li class=\"clearfix\"> <span class=\"pulll_left\"><img src=\"img/"+pic+"\">"+data[i][1]+"</span>\n"+
									"<span class=\"pulll_right ygr\">"+data[i][2]+"</span><span class=\"pulll_right_right \">"+data[i][3]+"</span>\n"+
								"</li>";
								str+=doc;
							}else{
								let doc="<li class=\"clearfix\" > <span id=\"span1\"><img src=\"img/"+pic+"\"></span><span class=\"pulll_left\" style=\"height: 70px; !important\"><marquee>"+data[i][1]+"</marquee></span>\n"+
									"<span class=\"pulll_right \">"+data[i][2]+"</span><span class=\"pulll_right_right \">"+data[i][3]+"</span>\n"+
								"</li>";
								str+=doc;
							}
						}
						document.querySelector("#ul2").innerHTML=str;
						let leng2=document.querySelector("#ul2");
						if(leng>5){
							if(ref)  clearInterval(ref);
							// $("#AdventFood").stop();
							loadScrollTable2('AdventFood');
						}
					}
				})
			}
			warnInfo();
			setInterval(warnInfo,300000);
		}
		$(function(){
			inventoryDetail();//库存明细
			warnInventoryInfo();//临期库存明细
			inventoryInfoStatisitc();//库存统计
		})