$(document).ready(function(){

    $("#start").click(function(){
        insert();
    });
});

function insert (){
    
            let x:number;
            let y:number;
            let ctr:number = 0;
            let attr;
            let pic:number = 0;
            let isUsed = new Array(false, false, false, false, false, false, false, false);
    
            while(ctr < 16){
                //Arary sometimes undefined -> deadlock
                if(ctr%2==0 && ctr==0){
                    pic = Math.floor(Math.random()*8)+1;
                }else if(ctr%2==0 && ctr!=0){
                    isUsed[pic] = true;
                    pic = Math.floor(Math.random()*8)+1;
                }
                console.log(isUsed[pic]);
                if(!isUsed[pic]){
                    x = Math.floor(Math.random()*4)+1;
                    y = Math.floor(Math.random()*4)+1;
                    
                    console.log('x = '+x);
                    console.log('y = '+y);
                    console.log('pic = '+pic);
                    console.log('ctr = '+ctr);

                    switch(x){

                        case 1: switch (y){

                            case 1: attr = $(".firstRow #1").attr("src");
                                if(attr == undefined){
                                    if(!isUsed[pic]){
                                        $(".firstRow #1").attr("src", "./img/"+pic+".jpg");
                                        ctr++;
                                    }
                                }break;

                                case 2: attr = $(".firstRow #2").attr("src");
                                if(attr == undefined){
                                    if(!isUsed[pic]){
                                        $(".firstRow #2").attr("src", "./img/"+pic+".jpg");
                                        ctr++;
                                    }
                                }break;

                                case 3: attr = $(".firstRow #3").attr("src");
                                if(attr == undefined){
                                    if(!isUsed[pic]){
                                        $(".firstRow #3").attr("src", "./img/"+pic+".jpg");
                                        ctr++;
                                    }
                                }break;

                                case 4: attr = $(".firstRow #4").attr("src");
                                if(attr == undefined){
                                    if(!isUsed[pic]){
                                        $(".firstRow #4").attr("src", "./img/"+pic+".jpg");
                                        ctr++;
                                    }
                                }break;
                            }break;

                        case 2: switch (y){

                            case 1: attr = $(".secondRow #1").attr("src");
                                if(attr == undefined){
                                    if(!isUsed[pic]){
                                        $(".secondRow #1").attr("src", "./img/"+pic+".jpg");
                                        ctr++;
                                    }
                                }break;

                                case 2: attr = $(".secondRow #2").attr("src");
                                if(attr == undefined){
                                    if(!isUsed[pic]){
                                        $(".secondRow #2").attr("src", "./img/"+pic+".jpg");
                                        ctr++;
                                    }
                                }break;

                                case 3: attr = $(".secondRow #3").attr("src");
                                if(attr == undefined){
                                    if(!isUsed[pic]){
                                        $(".secondRow #3").attr("src", "./img/"+pic+".jpg");
                                        ctr++;
                                    }
                                }break;

                                case 4: attr = $(".secondRow #4").attr("src");
                                if(attr == undefined){
                                    if(!isUsed[pic]){
                                        $(".secondRow #4").attr("src", "./img/"+pic+".jpg");
                                        ctr++;
                                    }
                                }break;
                            }break;

                        case 3: switch (y){

                            case 1: attr = $(".thirdRow #1").attr("src");
                                if(attr == undefined){
                                    if(!isUsed[pic]){
                                        $(".thirdRow #1").attr("src", "./img/"+pic+".jpg");
                                        ctr++;
                                    }
                                }break;

                                case 2: attr = $(".thirdRow #2").attr("src");
                                if(attr == undefined){
                                    if(!isUsed[pic]){
                                        $(".thirdRow #2").attr("src", "./img/"+pic+".jpg");
                                        ctr++;
                                    }
                                }break;

                                case 3: attr = $(".thirdRow #3").attr("src");
                                if(attr == undefined){
                                    if(!isUsed[pic]){
                                        $(".thirdRow #3").attr("src", "./img/"+pic+".jpg");
                                        ctr++;
                                    }
                                }break;

                                case 4: attr = $(".thirdRow #4").attr("src");
                                if(attr == undefined){
                                    if(!isUsed[pic]){
                                        $(".thirdRow #4").attr("src", "./img/"+pic+".jpg");
                                        ctr++;
                                    }
                                }break;
                            }break;

                        case 4: switch (y){

                            case 1: attr = $(".fourthRow #1").attr("src");
                                if(attr == undefined){
                                    if(!isUsed[pic]){
                                        $(".fourthRow #1").attr("src", "./img/"+pic+".jpg");
                                        ctr++;
                                    }
                                }break;

                                case 2: attr = $(".fourthRow #2").attr("src");
                                if(attr == undefined){
                                    if(!isUsed[pic]){
                                        $(".fourthRow #2").attr("src", "./img/"+pic+".jpg");
                                        ctr++;
                                    }
                                }break;

                                case 3: attr = $(".fourthRow #3").attr("src");
                                if(attr == undefined){
                                    if(!isUsed[pic]){
                                        $(".fourthRow #3").attr("src", "./img/"+pic+".jpg");
                                        ctr++;
                                    }
                                }break;

                                case 4: attr = $(".fourthRow #4").attr("src");
                                if(attr == undefined){
                                    if(!isUsed[pic]){
                                        $(".fourthRow #4").attr("src", "./img/"+pic+".jpg");
                                        ctr++;
                                    }
                                }break;
                            }break;
                    }
                }
            }
            return;
        }