$(document).ready(function(){var i=$(".header-nav-menu"),n=$(".header-nav-menu > .header-nav-menu-item"),e=$(".header-nav-submenu"),t=!1;function o(){n.velocity({height:n.height()})}$(window).on("resize",function(){$(this).width()>992?(i.is(":visible")||i.css({display:"block",opacity:1}),e.is(":visible")&&(o(),e.css({display:"none"}))):(i.css({display:"none",opacity:0}),t=!1)}),$(document).on("click",function(){Stun.utils.isDesktop()||i.is(":visible")&&(o(),i.css({display:"none"}),t=!1)}),$(".header-nav-btn").on("click",function(n){n.stopPropagation(),t=!t,i.velocity("stop").velocity({opacity:t?1:0},{duration:t?200:0,display:t?"block":"none"}),t||o()}),n.on("click",function(i){if(!Stun.utils.isDesktop()){var e=$(this).find(".header-nav-submenu"),t=n.height(),o=t+e.height()*e.length;e.length&&(i.stopPropagation(),$(this).velocity("stop").velocity({height:$(this).height()>t?t:o},{duration:300}).siblings().velocity({height:t},{duration:300}))}}),n.on("mouseenter",function(){var i=$(this).find(".header-nav-submenu");i.length&&i.velocity("stop").velocity({opacity:1},{duration:200,display:"block"})}),n.on("mouseleave",function(){var i=$(this).find(".header-nav-submenu");i.length&&i.css("display","none")})});