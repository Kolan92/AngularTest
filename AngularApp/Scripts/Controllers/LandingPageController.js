var LandingPageController = function($scope) {
    $scope.models = {
        input: "Hello world",
        output: ""
    };

    $scope.translateInput = function () {
        var stringToTranslate = $scope.models.input.toUpperCase();
        var output = "";

        for (var i = 0, len = stringToTranslate.length; i < len; i++) {
            for (key in $scope.dictionary) {
                if ($scope.dictionary.hasOwnProperty(key)) {
                    if (key === stringToTranslate[i]) {
                        output = output + $scope.dictionary[key];
                        break;
                    }
                }
            }
            output = output + " ";
            //console.log(output);
        }
        $scope.models.output = output;
        return output;
    }


    $scope.blinkDiode = function () {
        console.clear();
        codeAllSigns(0);
    }


    
    function codeAllSigns(index) {
        if ($scope.models.output.length > index) {
            var daouration;
            switch ($scope.models.output[index]) {
                case " ":
                    daouration = 5000;
                    break;
                case "-":
                    daouration = 3000;
                    break;
                case ".":
                    daouration = 1000;
                    break;
                default:
                    daouration = 1000;
            }
            setTimeout(function () {
                codeCurrentSign($scope.models.output[index]);
                //TurnOnDiode()
                codeAllSigns(++index);
            }, daouration);
        }
    }

    function codeCurrentSign(sign) {
        //switch (sign) {
        //        case " ":
        //            blink(5000);
        //            break;
        //        case "-":
        //            blink(3000);
        //            break;
        //        case ".":
        //            blink(1000);
        //            break;
        //    default:
        //}
        console.log(sign);
    }

    function blink(daourtion) {
        setTimeout(function () { $(".led-red").css("background-color", "#ff0000") }, 1000);
        //$(".led-red").css("background-color", "#ff0000");//background-color: #ff0000;
        setTimeout(function () { $(".led-red").css("background-color", "#000000") }, 1000);
    }

    $scope.dictionary = {
        "A": ".-",
        "B": "-...",
        "C": "-.-.",
        "D": "-..",
        "E": ".",
        "F": "..-.",
        "G": "--.",
        "H": "....",
        "I": "..",
        "J": ".---",
        "K": "-.-",
        "L": ".-..",
        "M": "--",
        "N": "-.",
        "O": "---",
        "P": ".--.",
        "Q": "--.-",
        "R": ".-.",
        "S": "...",
        "T": "-",
        "U": "..-",
        "V": "...-",
        "W": ".--",
        "X": "-..-",
        "Y": "-.--",
        "Z": "--.."
    };
}

LandingPageController.$inject = ['$scope'];