function getTime(){
	let date=new Date;
	let y=date.getFullYear();
	let m=date.getMonth()+1;
	let d=date.getDate();
	let h=date.getHours();
	let min=date.getMinutes();
	let s=date.getSeconds();
	if(h<10){
		h="0"+h;
	}
	if(min<10){
		min="0"+min;
	}
	if(s<10){
		s="0"+s;
	}
	let time=y+"-"+m+"-"+d+" "+h+":"+min+":"+s;
	document.querySelector('.time').innerText=time;
	};
	setInterval(getTime,1000);

function change(){
	let content=document.querySelector("#selectid").value;
	if(content=="Chinese"){
		let ss=document.querySelectorAll(".English");
		for(let i=0;i<ss.length;i++){
			ss[i].style.display='none';
		}
		let bb=document.querySelectorAll('.Chinese');
		for(let i=0;i<bb.length;i++){
			bb[i].style.display='block';
		}
		let span=document.querySelectorAll('.spanstyle');
		span[0].innerText='系统状态:';
		span[1].innerText='系统步骤:';
		span[2].innerText='运行时间:';
		let a=document.querySelectorAll('.astyle');
		a[0].innerText='报警名称';
		a[1].innerText='报警等级';
		a[2].innerText='可能原因';
		a[3].innerText='推荐措施';
	}
	else{
		let aa=document.querySelectorAll(".Chinese");
		for(let i=0;i<aa.length;i++){
			aa[i].style.display='none';
		}
		let bb=document.querySelectorAll('.English');
		for(let i=0;i<bb.length;i++){
			bb[i].style.display='block';
		}
		let spana=document.querySelectorAll('.spanstyle');
		spana[0].innerText='System State：';
		spana[1].innerText='Syatem Step：';
		spana[2].innerText='Running Time：';
		let a=document.querySelectorAll('.astyle');
		a[0].innerText='Warning Name';
		a[1].innerText='Warning Degree';
		a[2].innerText='Possible Cause';
		a[3].innerText='Recommend Measures';
	}
}
function loadScrollTable1(element) {
    let ul = "#" + element + ' ' + "ul";
    let li = "#" + element + ' ' + "li";
    let h2 = document.querySelector(li).clientHeight;
    let html = $(ul).html();
    $(ul).append(html);
    let ls = Math.floor( $(li).length / 4  +1);
    let i = 0;
    ref1 = setInterval(function () {
        i++;
        if (i == ls) {
            i = 1;
            $(ul).css({ marginTop: 0 });
            $(ul).animate({ marginTop: - h2 * i + 'px' }, 500);
        }
        $(ul).animate({ marginTop: - h2 * i + 'px' }, 500);
    }, 1200);
}
function loadScrollTable2(element) {
    let ul = "#" + element + ' ' + "ul";
    let li = "#" + element + ' ' + "li";
	// $(ul).css({ marginTop: 0 });
    let h2 = document.querySelector(li).clientHeight;
	// console.log(h2);
    let html = $(ul).html();
    $(ul).append(html);
    let ls = Math.floor( $(li).length / 2  +1);
    let i = 0;
    ref = setInterval(function () {
        i++;
        if (i == ls) {
            i = 1;
            $(ul).css({ marginTop: 0 });
            $(ul).animate({ marginTop: - h2 * i + 'px' }, 500);
        }
        $(ul).animate({ marginTop: - h2 * i + 'px' }, 500);
    }, 2000);
}
function loadScrollTable3(element){
	let div1="#"+element+' '+".lei1";
	let div2="#"+element+' '+".sfzcll_box";
	let h2=document.querySelector(".lei1 .sfzcll_smallBk").clientHeight;
	let html1=$(div1).html();
	$(div1).append(html1);
	let ls=Math.floor($(div2).length/2+1);
	let i=0;
	$(div1).css({ marginTop: 0 });
	ref2=setInterval(function(){
		i++;
		if(i==ls){
			i=1;
			$(div1).css({ marginTop: 0 });
			 $(div1).animate({ marginTop: - h2 * i + 'px' }, 500);
		}
		$(div1).animate({ marginTop: - h2 * i + 'px' }, 500);
	},2000)
}
    window.addEventListener("load",function(){
	getTime();
	// AlarmActionScroll();
	// loadScrollTable3('DeviceAlarmList');// 设备报警滚动，超过两个设置
    // loadScrollTable1('FoodStockInfo');//库存菜品滚动  li小于52个 就不用滚动了 大于52个才需要滚动
    // loadScrollTable2('AdventFood');//临期菜品滚动 li小于10个 就不用滚动了 大于10个才需要滚动
})


