$(document).ready(function(){var n=$(".header-nav-menu"),e=$(".header-nav-menu-item");$(document).on("click",function(){n.removeClass("show")}),$(".header-nav-btn").on("click",function(e){e.stopPropagation(),n.toggleClass("show")}),e.on("click",function(n){n.stopPropagation()}),e.on("mouseenter",function(){var n=$(this).find(".header-nav-submenu"),e="transition."+(Stun.utils.isDesktop()?"slideUpIn":"slideRightIn");n[0]&&n.velocity("stop").velocity(e,{duration:240})}),e.on("mouseleave",function(){var n=$(this).find(".header-nav-submenu");n[0]&&n.css("display","none")})});