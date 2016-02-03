var LandingPageController = function($scope) {
    $scope.models = {
        input: "Hello world"
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
            console.log(output);
        }
        return output;
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