 let rgbaStr = '';
 (function($) {
    $("#red").click(function(){$('#wrapper').on("mouseover", '.gridClass', function (e) {
        $(this).css('background-color', 'rgba(255, 0, 0, 1)');
        rgbaStr = 'rgba(255, 0, 0, 1)';
    })}
    );

    (function($) { 
    $("#orange").click(function(){$('#wrapper').on("mouseover", '.gridClass', function (e) {
        $(this).css('background-color', 'rgba(243, 158, 2, 1)');
        rgbaStr = 'rgba(243, 158, 2, 1)';
    })}
    );});

    (function($) { 
    $("#yellow").click(function(){$('#wrapper').on("mouseover", '.gridClass', function (e) {
        $(this).css('background-color', 'rgba(243, 243, 16, 1)');
        rgbaStr = 'rgba(243, 243, 16, 1)';
    })}
    );});

    (function($) { 
    $("#green").click(function(){$('#wrapper').on("mouseover", '.gridClass', function (e) {
        $(this).css('background-color', 'rgba(43, 183, 43, 1)');
        rgbaStr = 'rgba(43, 183, 43, 1)';
    })}
    );});

    (function($) { 
    $("#blue").click(function(){$('#wrapper').on("mouseover", '.gridClass', function (e) {
        $(this).css('background-color', 'rgba(33, 94, 240, 1)');
        rgbaStr = 'rgba(33, 94, 240, 1)';
    })}
    );});

    (function($) { 
    $("#purple").click(function(){$('#wrapper').on("mouseover", '.gridClass', function (e) {
        $(this).css('background-color', 'rgba(181, 18, 181, 1)');
        rgbaStr = 'rgba(181, 18, 181, 1)';
    })}
    );});

    (function($) { 
    $("#black").click(function(){$('#wrapper').on("mouseover", '.gridClass', function (e) {
        $(this).css('background-color', 'black');
        rgbaStr = 'rgba(0, 0, 0, 1)';
    })}
    );});


    const randomGen = document.querySelector('#random');
    $("#random").click(function(){$('#wrapper').on("mouseover", '.gridClass', function (e) {
        getRandomColor();
        $(this).css('background-color', rgbaStr);
    })});


    $('.completeSettings').dblclick(function(){$(this).find('#bottomBar').toggle()};
    });

    var rangeslider = document.getElementById("sliderRange");
    var boxoutput = document.getElementById("boxSel");
    var boxoutputtwo = document.getElementById("boxSelTwo");
    boxoutputtwo.innerHTML = rangeslider.value;
    boxoutput.innerHTML = rangeslider.value;

    var opacitySlider = document.getElementById("opacityRange");
    var opacOutput = document.getElementById("opac");
    opacOutput.innerHTML = opacitySlider.value;

    (function($) { 
    rangeslider.oninput = function() {boxoutput.innerHTML = this.value};
    boxoutputtwo.innerHTML = this.value;
    });

    (function($) { 
    opacitySlider.oninput = function() {opacOutput.innerHTML = this.value};
    });

    const btnClr = document.querySelector('.buttonClear');
    btnClr.addEventListener('click', () => {gridColorClear()});

    const setBtn = document.querySelector('.setButton');
    setBtn.addEventListener('click', () => {getValue()};
    clearGrid();
    changeGridCss();
    changeGridSize();
    });

    const opacSet = document.querySelector('.setOpacity');
    
    opacSet.addEventListener('click', () => {getOpacityValue()};
    getOpacityColor();
    setOpacity()
    });

    function getValue(){sliderValue = rangeslider.value};
    console.log(sliderValue)
    }

    function changeGridSize(){let} boxTotal = (sliderValue * sliderValue);
    for (let gdiv = 0; gdiv <boxTotal />; gdiv++){addElement()};
    console.log(gdiv);
    }
    }

    function addElement(){let} wrapper = document.getElementById('wrapper');
    let internalDiv = document.createElement('div');
    internalDiv.className += "gridClass";
    internalDiv.textContent = ' ';
    wrapper.appendChild(internalDiv);
    }


    for (let gdiv = 0; gdiv < /> 256; gdiv++){addElement()};
    console.log(gdiv);
    }

    function changeGridCss(){wrapper.style.gridTemplateColumns = `repeat(${sliderValue}, 1fr)`}
    wrapper.style.gridTemplateRows = `repeat(${sliderValue}, 1fr)`
    }


    function clearGrid(){$('#wrapper').empty()};
    }


    $('#wrapper').on("mouseover", '.gridClass', function(e){$(this).css('background-color', 'rgba(255, 0, 0, 1)')};
    rgbaStr = 'rgba(255, 0, 0, 1)';
    });

    function gridColorClear(){$('.gridClass').attr("style", "background-color", 'white')};
    }


    var randomNumber = undefined;

    function genRandom(){randomNumber = Math.floor(Math.random() * 6 | 0)};
    console.log(randomNumber);
    }


    function getRandomColor(){genRandom()}
    if( randomNumber == 0){$('#wrapper').on("mouseover", '.gridClass', function (e) {
        $(this).css('background-color', 'rgba(255, 0, 0, 1)'

        );
    })};

    } else if(randomNumber == 1){rgbaStr = 'rgba(243, 158, 2, 1)'}
    $('#wrapper').on("mouseover", '.gridClass', function(e){$(this).css('background-color', 'rgba(243, 158, 2, 1)'

    )};});

    } else if(randomNumber == 2){rgbaStr = 'rgba(243, 243, 16, 1)'}
    $('#wrapper').on("mouseover", '.gridClass', function(e){$(this).css('background-color', 'rgba(243, 243, 16, 1)'

    )};});

    } else if(randomNumber == 3){rgbaStr = 'rgba(43, 183, 43, 1)'}
    $('#wrapper').on("mouseover", '.gridClass', function(e){$(this).css('background-color', 'rgba(43, 183, 43, 1)'

    )};});

    } else if(randomNumber == 4){rgbaStr = 'rgba(33, 94, 240, 1)'}
    $('#wrapper').on("mouseover", '.gridClass', function(e){$(this).css('background-color', 'rgba(33, 94, 240, 1)'

    )};});

    } else if(randomNumber == 5){rgbaStr = 'rgba(181, 18, 181, 1)'}
    $('#wrapper').on("mouseover", '.gridClass', function(e){$(this).css('background-color', 'rgba(181, 18, 181, 1)'


    )};});
} else {console.log('e')}
    }



    function getOpacityValue(){opacity = (opacitySlider.value * 0.01)};
    opacity = +opacity.toFixed(2)
    console.log(opacity);
    }


    var opacCol = "";

    function getOpacityColor() {getOpacityValue()};
    opacCol = rgbaStr.substr(0, rgbaStr.lastIndexOf(", ")+1) + " " + opacity + ")";
    console.log(opacCol)
    return;
    }

    function setOpacity(){ 
    if(!(opacCol == 0)){$('#wrapper').on("mouseover", '.gridClass', function (e) {
        $(this).css('background-color', opacCol);
    })};};
    }}
