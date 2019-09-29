var car = {
    model:'Benz',
    color:'black',
    year:1886,
    doors:0,
    historical:true
};

// before ES6
var model = car.model;
var color = car.color;
var year = car.year;
var doors = car.doors;
var historical = car.historical;

// from ES6
var {model, color, year, doors, historical} = car;


var computer = {
    type: 'PC',
    monitor: {
        color: 'black',
        size: '16\"',
        HDMI: true,
        SSD: true
    },
    tower:{
        color: 'grey',
        CPU: 4.7,
        memory: 16,
        SSD: 128
    }
}

// before ES6
var type = computer.type;
var color = computer.monitor.color;
var size = computer.monitor.size;
var HDMI = computer.monitor.HDMI;
var VGA = computer.monitor.VGA;
var colorTower = computer.tower.color;
var CPU = computer.tower.CPU;
var memory = computer.tower.memory;
var SSD = computer.tower.SSD;

// from ES6
var {type, monitor: {color: monitorColor, size: size, HDMI: HDMI, VGA: VGA}, tower: {color: towerColor, CPU: CPU, memory: memory, SSD: SSD}} = computer;