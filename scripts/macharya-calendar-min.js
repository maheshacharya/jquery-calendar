function Calendar(e){function t(){$(u).css({"font-family":"arial","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select:":"none","user-select":"none"}),$(".calendar-control").css({"font-weight":"bold","padding-left":"10px","padding-right":"10px",cursor:"pointer",color:"#666666"}),$(".calendar-control:hover").css({color:"#ffffff","text-shadow":"0 0 6px #000000"}),$(".calendar-day-td").css({cursor:"pointer",border:"1px solid rgba(0,0,0,0.02)",padding:"4px"}),$(".calendar-quick-button").css({padding:"4px","background-color":"#333333",color:"white",margin:"2px",cursor:"pointer","float":"right","font-size":"10px"})}function a(e,t){return new Date(e,t,0).getDate()}function n(e){var t=new Date(e);return t.getDay()}function r(t,a){var n=.08*e.width,r=$(t).prepend("<tr style='font-size:"+n+"px' class='calendar-heading'><tr>").find("tr.calendar-heading");$(r).append("<td colspan ='7' style='text-align:center;padding-bottom:10px;background-color:rgba(0,0,0,0.02);height:"+n+"px;'><span style='display:inline;' class='year-control calendar-control' name='calendar-control' title='Previous Year'>&#171;</span><span style='display:inline;' class='month-control calendar-control' name='calendar-control' title='Previous Month'>&lsaquo;</span><span><select class='calendar-month-selector' name='calendar-control' style='display:inline;height:"+n+"px;font-size:"+n/2+"px;border:none;background-color:rgba(0,0,0,0.0)'></select></span><span><select class='calendar-year-selector' name='calendar-control' style='display:inline;height:"+n+"px;font-size:"+n/2+"px;border:none;background-color:rgba(0,0,0,0.0)'></select></span><span style='display:inline;' class='month-control calendar-control' name='calendar-control' title='Next Month'>&rsaquo;</span><span style='display:inline;' class='year-control calendar-control' name='calendar-control' title='Next Year'> &#187;</span></td>"),$.each(s,function(e,t){var n="";s[a.getMonth()]===t&&(n="selected"),$(u).find(".calendar-month-selector").append("<option "+n+">"+t+"</option>")});var i=a.getFullYear()+e.future_years,d=i-e.max_years;0>d&&(d=-1*d);for(var h=d;i>=h;h++){var f="";a.getFullYear()===h&&(f="selected"),$(u).find(".calendar-year-selector").append("<option "+f+">"+h+"</option>")}$(".calendar-control").on("click",function(t){t.stopPropagation(),t.preventDefault();var n=a.getMonth(),r=a.getFullYear(),o=$(this).attr("title");"Previous Year"===o?r--:"Next Year"===o?r++:"Previous Month"===o?n>0?n--:(n=11,r--):"Next Month"===o&&(11===n?(r++,n=0):n++),c(u,new Date(n+1+"/"+l()+"/"+r),!1);var i=e.rest_endpoint+"?start="+(n+1)+"-"+start+"-"+r+"&end="+(n+1)+"-"+end+"-"+r;updateEventsView($(u),i)}),$(".calendar-month-selector, .calendar-year-selector").change(function(){c(u,o(),!1);var t=e.rest_endpoint+"?start="+(p+1)+"-"+start+"-"+g+"&end="+(p+1)+"-"+end+"-"+g;updateEventsView($(u),t)})}function o(){for(var e=$(".calendar-month-selector").val(),t=$(".calendar-year-selector").val(),a=l(),n=-111,r=0;r<s.length;r++)s[r]===e&&(n=r+1);return new Date(n+"/"+a+"/"+t)}function l(){var e=1;return $.each($(".calendar-day-td"),function(t,a){return"today"===$(a).attr("day")?void(e=$(a).text()):void 0}),e}function c(o,l,c){var f=a(l.getFullYear(),l.getMonth()+1),v=new Date,y=l.getDate();c&&(y=v.getDate());var b=$(o).html("<center><table cellpadding='0' cellspacing='0' class='calendar-table'></table></center>").find("table.calendar-table");r(b,l);var m=0,w=Math.ceil(f/7),x=(e.width-.05*e.width)/7,k=(e.height-.6*e.height)/w,D=.04*e.height;10>D&&(D=10);var M=l.getMonth()+1+"/1/"+l.getFullYear();g=l.getFullYear(),p=l.getMonth();var _=n(M),I=$(b).append("<tr class='calendar-week-labels'></tr>").find("tr.calendar-week-labels");$.each(d,function(e,t){$(I).append("<td style='font-size:"+D+"px;text-align:left;border-bottom:1px solid #cccccc;background-color:rgba(0,0,0,0.2);padding:4px'>"+t.substring(0,3)+"</td>")}),start=1;for(var F=0;w>=F;F++)try{for(var Y=$(b).append("<tr class='calendar-row-tr-"+F+"'></tr>").find("tr.calendar-row-tr-"+F),S=0;S<d.length;S++)try{0===F&&_>S||m++;var z=m;if(end=m,f>=z){10>m&&(z="0"+z);var N="";"00"===z&&(z="&nbsp;&nbsp;",N+="color:#cccccc;background-color:rgba(0,0,0,0.02)");var O="";parseInt(y)===parseInt(m)&&(O="today",N+=";background-color:rgba(0,0,0,0.8);color:#fff;");var E=guid(),P=p+1;10>p+1&&(P="0"+P);var M=m;10>m&&(M="0"+m);var T=$(Y).append("<td day='"+z+"' id='"+E+"' class='calendar-day-td "+P+"-"+M+"-"+g+"' style='font-size:"+D+"px;position:relative;text-align:left"+N+"' click='' day='"+O+"'>"+z+"</td>").find("td#"+E);$(T).css("width",x+"px"),$(T).css("height",k+"px"),m>0&&$(T).attr("click","allowed")}else N+="color:#cccccc;background-color:rgba(0,0,0,0.02)",z="&nbsp;&nbsp;",$(Y).append("<td class='calendar-day-td' style='font-size:"+D+"px;"+N+";width:"+x+"px;height:"+k+"px;'> "+z+" </td>")}catch(V){}}catch(V){}$(u).find(".calendar-day-td").hover(function(){"allowed"===$(this).attr("click")&&($(this).css("box-shadow","inset 0 0 6px #333333"),$(this).css("font-weight","bold"));var e=$(this).find(".event-details");null!=e&&$(e).fadeIn()},function(){$(this).css("box-shadow","none"),$(this).css("font-weight","normal");var e=$(this).find(".event-details");null!=e&&$(e).fadeOut()}),$(u).find(".calendar-day-td").on("click",function(){var t=$(this).text(),a=$(".calendar-month-selector").val(),n=$(".calendar-year-selector").val(),r=0;$.each(s,function(e,t){a===t&&(r=e+1)});var o=r+"/"+t+"/"+n,l=$(h).attr("format");void 0===l&&(l="mm/dd/yyyy");var c="";l.indexOf("hh:")>0&&(c=void 0===e.time_value?DateFormat(l.substring(l.indexOf("hh:")),new Date):e.time_value),$(h).val(o+" "+c)}),i(l,b),t()}function i(e,t){var a=$(t).append("<tr class='calendar-time-selector'></tr>").find("tr.calendar-time-selector");$(a).css("height","40px"),setInterval(function(){$(".calendar-time").html(DateFormat("hh:mm:ss",new Date))},1e3)}var d=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],s=["January","February","March","April","May","June","July","August","September","October","November","December"],u=null,h=null,p=null,g=null;$(document).ready(function(){void 0===e&&(e={width:500,height:300,max_years:100,future_years:10,background_color:"rgba(255,255,255,0.96)",color:"rgba(0,0,0,1.0)",date_field_class:"event-calendar"}),u=document.createElement("div"),$(u).attr("id","calendar"),$(u).css("background-color",e.background_color),$(u).width(e.width),$(u).height(e.height),void 0!==e.dayofweek&&(d=e.dayofweek),void 0!==e.months&&(s=e.months),$("."+e.date_field_class).append(u),c(u,new Date,!0);var t=e.rest_endpoint+"?start="+(p+1)+"-"+start+"-"+g+"&end="+(p+1)+"-"+end+"-"+g;updateEventsView($(u),t)}),this.getDays=function(e,t){return a(e,t)},this.getDayOfWeek=function(e){return n(e)},this.getDayOfWeekName=function(e){var t=n(e);return d[t]}}function DateFormat(e,t){if("undefined"==typeof t)var a=new Date;else var a=t;var n,r,o,l,c,i=a.getDate(),d=(a.getDay(),a.getMonth()+1),s=(a.getMonth(),a.getYear(),a.getFullYear(),a.getHours()),u=a.getMinutes(),h=a.getSeconds();switch(n=parseInt(d)<10&&d.toString().length<2?"0"+d:d,r=parseInt(i)<10&&i.toString().length<2?"0"+i:i,o=parseInt(s)<10&&s.toString().length<2?"0"+s:s,l=parseInt(u)<10&&u.toString().length<2?"0"+u:u,c=parseInt(h)<10&&h.toString().length<2?"0"+h:h,e){case"hh:mm:ss":return o+":"+l+":"+c;case"hh:mm":return o+":"+l;case"hh":return o}}function isDate(e){if(!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(e))return!1;var t=e.split("/"),a=parseInt(t[1],10),n=parseInt(t[0],10),r=parseInt(t[2],10);if(1e3>r||r>3e3||0===n||n>12)return!1;var o=[31,28,31,30,31,30,31,31,30,31,30,31];return(r%400===0||r%100!==0&&r%4===0)&&(o[1]=29),a>0&&a<=o[n-1]}function updateEventsView(e,t){var a=window.location.port;void 0!==a&&""==a||(a=":"+a);var n=""+window.location.protocol+"//"+window.location.hostname+a;$.ajax({url:t}).done(function(t){200===t.code&&$(t.data.eventInfo).each(function(t,a){var r=$(e).find("."+a.startDate);$(r).css("background-color","rgba(250,216,22,.9)");var o=n+context+"/"+a.link;a.link.startsWith("http")&&(o=a.link);var l=r.children();l.length>0?$($(r).find(".event-details")).append("<div>"+a.startTime+"</div><div style='font-weight:bold'><a href='"+o+"'>"+a.title+"</a></div>"):$(r).append("<div class='first-event event-details' style='min-width:"+$(e).width()/2+"px;display:none;padding:10px;position:absolute;background:rgba(250,216,22,.9);z-index:99999;border:1px solid #333'><div>"+a.startTime+"</div><div style='font-weight:bold'><a href='"+o+"'>"+a.title+"</a></div></div>")})})}var guid=function(){function e(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}return function(){return e()+""+e()+"-"+e()+"-"+e()+"-"+e()+"-"+e()+e()+e()}}();