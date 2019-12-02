            window.onload = function(){
                var oUl = document.getElementById("list");
                var caution = document.getElementById("caution");
                var aLi = oUl.children;//定时器管理
                var timer = null;//缓动
                var leader = 0;
                var target = 0;//停留
                var current = 0;
                for(var i = 0;i<aLi.length;i++){
                //鼠标移动
                    aLi[i].onmouseover = function(){
                    //关闭定时器
                        clearInterval(timer);
                        //获取当前的left值
                        target = this.offsetLeft;
                        //开启定时器
                        timer = setInterval(autoCaution,20);   
                    }
                    //鼠标点击
                    aLi[i].onmousedown = function(){
                    //清楚所有高亮的文字
                        for(var j = 0;j<aLi.length;j++){
                            aLi[j].style.color = "#fff"; 
                        }
                        //当前点击栏变为红色
                        this.style.color = "#ccc";
                        //提示框
                        current = this.offsetLeft;
                        caution.style.left = current+"px";      
                    }
                }
                //鼠标离开
                oUl.onmouseout = function(){
                //关闭定时器
                    clearInterval(timer);
                    target = current;
                    timer = setInterval(autoCaution,20);
                }
                //缓动动画
                function autoCaution(){   
                    leader = leader +(target - leader) /10;
                    caution.style.left = leader+"px";
                }
            }
