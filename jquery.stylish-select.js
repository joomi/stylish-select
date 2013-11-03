(function($){$('html').addClass('stylish-select');Array.prototype.indexOf=function(obj,start){for(var i=(start||0);i<this.length;i++){if(this[i]==obj){return i;}}}
$.fn.extend({getSetSSValue:function(value){if(value){$(this).val(value).change();return this;}else{return $(this).find(':selected').val();}},resetSS:function(){var oldOpts=$(this).data('ssOpts');$this=$(this);$this.next().remove();$this.unbind('.sSelect').sSelect(oldOpts);}});$.fn.sSelect=function(options){return this.each(function(){var defaults={defaultText:'Please select',animationSpeed:0,ddMaxHeight:'',containerClass:''};var opts=$.extend(defaults,options),$input=$(this),$containerDivText=$('<div class="selectedTxt"></div>'),$containerDiv=$('<div class="newListSelected '+opts.containerClass+'"></div>'),$newUl=$('<ul class="newList" style="visibility:hidden;"></ul>'),itemIndex=-1,currentIndex=-1,keys=[],prevKey=false,prevented=false,$newLi;$(this).data('ssOpts',options);if($input.attr('disabled'))
{$containerDivText.addClass('disabled');}
$containerDiv.insertAfter($input);$containerDiv.attr("tabindex",$input.attr("tabindex")||"0");$containerDivText.prependTo($containerDiv);$newUl.appendTo($containerDiv);$input.hide();$containerDivText.data('ssReRender',!$containerDivText.is(':visible'));if($input.children('optgroup').length==0){$input.children().each(function(i){var option=$(this).html();var key=$(this).val();keys.push(option.charAt(0).toLowerCase());if($(this).attr('selected')==true){opts.defaultText=option;currentIndex=i;}
$newUl.append($('<li><a href="JavaScript:void(0);">'+option+'</a></li>').data('key',key));});$newLi=$newUl.children().children();}else{$input.children('optgroup').each(function(){var optionTitle=$(this).attr('label'),$optGroup=$('<li class="newListOptionTitle">'+optionTitle+'</li>');$optGroup.appendTo($newUl);var $optGroupList=$('<ul></ul>');$optGroupList.appendTo($optGroup);$(this).children().each(function(){++itemIndex;var option=$(this).html();var key=$(this).val();keys.push(option.charAt(0).toLowerCase());if($(this).attr('selected')==true){opts.defaultText=option;currentIndex=itemIndex;}
$optGroupList.append($('<li><a href="JavaScript:void(0);">'+option+'</a></li>').data('key',key));})});$newLi=$newUl.find('ul li a');}
var newUlHeight=$newUl.height(),containerHeight=$containerDiv.height(),newLiLength=$newLi.length;if(currentIndex!=-1){navigateList(currentIndex,true);}else{$containerDivText.text(opts.defaultText);}
function newUlPos(){var containerPosY=$containerDiv.offset().top,docHeight=jQuery(window).height(),scrollTop=jQuery(window).scrollTop();if(newUlHeight>parseInt(opts.ddMaxHeight)){newUlHeight=parseInt(opts.ddMaxHeight);}
containerPosY=containerPosY-scrollTop;if(containerPosY+newUlHeight>=docHeight){$newUl.css({top:'-'+newUlHeight+'px',height:newUlHeight});$input.onTop=true;}else{$newUl.css({top:containerHeight+'px',height:newUlHeight});$input.onTop=false;}}
newUlPos();$(window).bind('resize.sSelect scroll.sSelect',newUlPos);function positionFix(){$containerDiv.css('position','relative');}
function positionHideFix(){$containerDiv.css('position','static');}
$containerDivText.bind('click.sSelect',function(event){if($input.attr('disabled'))
{return;}
event.stopPropagation();if($(this).data('ssReRender')){newUlHeight=$newUl.height('').height();containerHeight=$containerDiv.height();$(this).data('ssReRender',false);newUlPos();}
$('.newList').not($(this).next()).hide().parent().css('position','static').removeClass('newListSelFocus');$newUl.toggle();positionFix();$newLi.eq(currentIndex).focus();});$newLi.bind('click.sSelect',function(e){var $clickedLi=$(e.target);currentIndex=$newLi.index($clickedLi);prevented=true;navigateList(currentIndex);$newUl.hide();$containerDiv.css('position','static');});$newLi.bind('mouseenter.sSelect',function(e){var $hoveredLi=$(e.target);$hoveredLi.addClass('newListHover');}).bind('mouseleave.sSelect',function(e){var $hoveredLi=$(e.target);$hoveredLi.removeClass('newListHover');});function navigateList(currentIndex,init){$newLi.removeClass('hiLite').eq(currentIndex).addClass('hiLite');if($newUl.is(':visible')){$newLi.eq(currentIndex).focus();}
var text=$newLi.eq(currentIndex).html();text=text.replace('&amp;','&');var val=$newLi.eq(currentIndex).parent().data('key');if(init==true){$input.val(val);$containerDivText.text(text);return false;}
try{$input.val(val)}catch(ex){$input[0].selectedIndex=currentIndex;}
$input.change();$containerDivText.text(text);}
$input.bind('change.sSelect',function(event){$targetInput=$(event.target);if(prevented==true){prevented=false;return false;}
$currentOpt=$targetInput.find(':selected');currentIndex=$targetInput.find('option').index($currentOpt);navigateList(currentIndex,true);});function keyPress(element){$(element).unbind('keydown.sSelect').bind('keydown.sSelect',function(e){var keycode=e.which;prevented=true;switch(keycode){case 40:case 39:incrementList();return false;break;case 38:case 37:decrementList();return false;break;case 33:case 36:gotoFirst();return false;break;case 34:case 35:gotoLast();return false;break;case 13:case 27:$newUl.hide();positionHideFix();return false;break;}
keyPressed=String.fromCharCode(keycode).toLowerCase();var currentKeyIndex=keys.indexOf(keyPressed);if(typeof currentKeyIndex!='undefined'){++currentIndex;currentIndex=keys.indexOf(keyPressed,currentIndex);if(currentIndex==-1||currentIndex==null||prevKey!=keyPressed)currentIndex=keys.indexOf(keyPressed);navigateList(currentIndex);prevKey=keyPressed;return false;}});}
function incrementList(){if(currentIndex<(newLiLength-1)){++currentIndex;navigateList(currentIndex);}}
function decrementList(){if(currentIndex>0){--currentIndex;navigateList(currentIndex);}}
function gotoFirst(){currentIndex=0;navigateList(currentIndex);}
function gotoLast(){currentIndex=newLiLength-1;navigateList(currentIndex);}
$containerDiv.bind('click.sSelect',function(e){e.stopPropagation();keyPress(this);});$containerDiv.bind('focus.sSelect',function(){$(this).addClass('newListSelFocus');keyPress(this);});$containerDiv.bind('blur.sSelect',function(){$(this).removeClass('newListSelFocus');});$(document).bind('click.sSelect',function(){$containerDiv.removeClass('newListSelFocus');$newUl.hide();positionHideFix();});$containerDivText.bind('mouseenter.sSelect',function(e){var $hoveredTxt=$(e.target);$hoveredTxt.parent().addClass('newListSelHover');}).bind('mouseleave.sSelect',function(e){var $hoveredTxt=$(e.target);$hoveredTxt.parent().removeClass('newListSelHover');});$newUl.css({left:'0',display:'none',visibility:'visible'});});};})(jQuery);
