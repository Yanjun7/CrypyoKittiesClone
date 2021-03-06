
var colors = Object.values(allColors())

var defaultDNA = {
    "headcolor" : 10,
    "mouthColor" : 13,
    "eyesColor" : 96,
    "earsColor" : 10,
    //Cattributes
    "eyesShape" : 1,
    "decorationPattern" : 1,
    // "decorationMidcolor" : 13,
    // "decorationSidescolor" : 13,
    "animation" :  1,
    "lastNum" :  1
    }

// when page load
$( document ).ready(function() {
  $('#dnabody').html(defaultDNA.headColor);
  $('#dnamouth').html(defaultDNA.mouthColor);
  $('#dnaeyes').html(defaultDNA.eyesColor);
  $('#dnaears').html(defaultDNA.earsColor);
    
  $('#dnashape').html(defaultDNA.eyesShape)
  $('#dnadotsstyle').html(defaultDNA.decorationPattern)

  //$('#dnadecoration').html(defaultDNA.decorationPattern)
  // $('#dnadecorationMid').html(defaultDNA.decorationMidcolor)
  // $('#dnadecorationSides').html(defaultDNA.decorationSidescolor)
  $('#dnaanimation').html(defaultDNA.animation)
  $('#dnaspecial').html(defaultDNA.lastNum)

  renderCat(defaultDNA)
});

function getDna(){
    var dna = ''
    dna += $('#dnabody').html()
    dna += $('#dnamouth').html()
    dna += $('#dnaeyes').html()
    dna += $('#dnaears').html()
    dna += $('#dnashape').html()
    dna += $('#dnadotsstyle').html()
    dna += $('#dnaanimation').html()
    dna += $('#dnaspecial').html()
    // dna += $('#dnadecoration').html()
    // dna += $('#dnadecorationMid').html()
    // dna += $('#dnadecorationSides').html()
    

    return parseInt(dna)
}

function renderCat(dna){
    headColor(colors[dna.headcolor],dna.headcolor)
    $('#bodycolor').val(dna.headcolor)
    animationStyle(dna.animation)
    $("#animationstyle").val(dna.animation)
}

// Changing cat colors
$('#bodycolor').change(()=>{
    var colorVal = $('#bodycolor').val()
    headColor(colors[colorVal],colorVal)
})

$('#earcolor').change(()=>{
  var colorVal = $('#earcolor').val()
  earColor(colors[colorVal],colorVal)
})

$('#eyecolor').change(()=>{
  var colorVal = $('#eyecolor').val()
  eyeColor(colors[colorVal],colorVal)
})

$('#mouthcolor').change(()=>{
  var colorVal = $('#mouthcolor').val()
  mouthColor(colors[colorVal],colorVal)
})
$('#eyeshape').change(()=>{  //listener
  var shape = parseInt($('#eyeshape').val())
  eyeVariation(shape)
})

$('#dotspattern').change(()=>{  //listener
  var dots = parseInt($('#dotspattern').val())
  dotsStyle(dots)
})

$('#animationstyle').change(()=>{
  var animations = parseInt($('#animationstyle').val())
  animationStyle(animations)
})
