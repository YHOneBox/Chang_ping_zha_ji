var button;
var deviceidhehehe;
var rgbled;
var photocell;
var lightCheck = 0;
var lastLight = 100;
var lightdo;


function shoooooot(){
  c2_callFunction("shoot")
}

function xixixi(){
  c2_callFunction("attack")
}



function three(){
  rgbled.setColor('#33cc00');
}

function two(){
  rgbled.setColor('#ff6600');
}

function one(){
  
  rgbled.setColor('#ff0000');
}

function zero(){
  rgbled.setColor('#000000');
}

function set_deviceID(){
deviceidhehehe = prompt('輸入DeviceID','')
boardReady({board: 'Smart', device: deviceidhehehe , transport: 'mqtt'}, function (board) {
  board.samplingInterval = 50;
  rgbled = getRGBLedCathode(board, 15, 12, 13);
  button = getPullupButton(board, 4);
  photocell = getPhotocell(board, 0);
  photocell.measure(function (val) {
          photocell.detectedVal = val;
          lightdo = Math.round(((photocell.detectedVal - (0)) * (1/((1)-(0)))) * ((100)-(0)) + (0));
      lightCheck = lightdo;
      if((lightCheck-lastLight)>5){
          c2_callFunction("jump");
          
          lastLight = lightCheck;
        }
    
      if((lightCheck-lastLight)<-5){
          
          lastLight = lightCheck;
        }
  });
  
  
  button.on('pressed', function () {
    xixixi();
    shoooooot();
  });
    
  
});
}
