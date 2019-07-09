angular.module('Webmail', ["ngSanitize"])
    .controller('WebmailCtrl', function($scope, $location){

    $scope.dossiers  = [
        { value: "RECEPTION" , label: "Boite de reception", emails: [
            { id: 1, from: "Albator", to: "Rudy", subject: "Je reviens", date: new Date(2012, 2, 20, 15,30), content: "lorem  ippsum yo jorovien"},
            { id: 2, from: "Capitaine Flam", to: "Rudy", subject: "Bisous de l'espace", date: new Date(2015, 6, 10, 12,30), content: "lorem  ippsum yo josui danlespace"},
            { id: 3, from: "Pikachu", to: "Rudy", subject: "Pikaflupz", date: new Date(2011, 3, 3, 16,45), content: "lorem  ippsum yo pikapika"},
            { id: 4, from: "Barbapapa", to: "Rudy", subject: "Hulahup Barbatruc",date: new Date(2013, 1, 13, 11,44), content: "lorem  ippsum yo barbatruc"}
        ]   },
        { value: "ARCHIVES" , label: "Archives", emails: [
            { id: 5, from: "Candy", to: "Rudy", subject: "Happy beurzday", date: new Date(2015, 6, 3, 1,3), content: "lorem  ippsum yo c candy warolz"},
            { id: 6, from: "Hiro Nakamura", to: "Rudy", subject: "Konichiwa", date: new Date(2019, 8, 22, 15,12), content: "lorem  ippsum yo heroes on ur back"},
            { id: 7, from: "Asuka Langley Soryu", to: "Rudy", subject: "Shinji fag", date: new Date(2014, 6, 3,10,12), content: "lorem  ippsum eva01 ligma "}
        ]   },
        { value: "ENVOYES" , label: "Envoyed", emails: [
            { id: 8, from: "Rudy", to: "Albator", subject: "Bien ou bié?", date: new Date(1989,7 , 29,8,12), content: "lorem  ippsum uésh mn pote albatz"},
            { id: 9, from: "Rudy", to: "Captaine Flam", subject: "Gloubiboulga", date: new Date(1200, 5, 5,6,1), content: "lorem  ippsum uésh ma flamenkuch"}
        ]   },
        { value: "SPAM" , label: "Courrier indésirable", emails: [
            { id: 10, from: "Rue du discount", to: "Rudy", subject: "envie d'un frigo?",date: new Date(1541, 10, 5,18,50), content: "lorem  ippsum frigo pachér"},
            { id: 11, from: "Steam", to: "Rudy", subject: "too late bruh", date: new Date(2022, 1, 17,13,55), content: "lorem  ippsum <strong>steam</strong> promozion"}
        ]   }
    ];


    $scope.dossierCourant = null;
    $scope.emailSelect = null;

    $scope.selectionDossier = function(dossier) {
        $scope.dossierCourant = dossier;
        $scope.emailSelect = null;

    }


    $scope.selectionEmail = function(email){
        $scope.emailSelect = email;
    }

    $scope.versEmail = function(dossier, email){
        $location.path("/" + dossier.value + "/" + email.id);
    }

    // tri


    $scope.cssChevronsTri = function(champ) {
        return { 
            glyphicon: $scope.champTri == champ,
            'glyphicon-chevron-up': $scope.champTri == champ && !$scope.triDescendant,
            'glyphicon-chevron-down': $scope.champTri == champ && $scope.triDescendant 
        }
    }
    $scope.champTri = null;
    $scope.triDescendant = false;

    $scope.triEmails = function(champ) {
        if($scope.champTri = champ){
            $scope.triDescendant =  !$scope.triDescendant;
        }else{
        $scope.champTri = champ;
        $scope.triDescendant = false;
        }
    }




    $scope.$watch(function(){
      return   $location.path();

        }, function(newPath){
            console.log(newPath);
            var tabPath = newPath.split('/');
            if (tabPath.length > 1) {
                var valDossier= tabPath[1];
                $scope.dossiers.forEach(function(item){
                    if (item.value == valDossier) {
                        $scope.selectionDossier(item);
                    }
                });
                if(tabPath.length > 2) {
                    var idMail = tabPath[2];
                    $scope.dossierCourant.emails.forEach(function(item){
                        if(item.id == idMail){
                            $scope.selectionEmail(item);
                        }
                    });
                }
            }
        });
   


})
