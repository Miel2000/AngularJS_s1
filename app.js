angular.module('Webmail', ["ngSanitize"])
    .controller('WebmailCtrl', function($scope, $location){

    $scope.dossiers  = [
        { value: "RECEPTION" , label: "Boite de reception", emails: [
            { id: 1, from: "Albator", to: "Rudy", subject: "Je reviens", date: "20/09/2014", content: "lorem  ippsum yo jorovien"},
            { id: 2, from: "Capitaine Flam", to: "Rudy", subject: "Bisous de l'espace", date: "18/09/2014", content: "lorem  ippsum yo josui danlespace"},
            { id: 3, from: "Pikachu", to: "Rudy", subject: "Pikaflupz", date: "17/09/2014", content: "lorem  ippsum yo pikapika"},
            { id: 4, from: "Barbapapa", to: "Rudy", subject: "Hulahup Barbatruc", date: "16/09/2014", content: "lorem  ippsum yo barbatruc"}
        ]   },
        { value: "ARCHIVES" , label: "Archives", emails: [
            { id: 5, from: "Candy", to: "Rudy", subject: "Happy beurzday", date: "20/09/2014", content: "lorem  ippsum yo c candy warolz"},
            { id: 6, from: "Hiro Nakamura", to: "Rudy", subject: "Konichiwa", date: "18/09/2014", content: "lorem  ippsum yo heroes on ur back"},
            { id: 7, from: "Asuka Langley Soryu", to: "Rudy", subject: "Shinji fag", date: "17/09/2014", content: "lorem  ippsum eva01 ligma "}
        ]   },
        { value: "ENVOYES" , label: "Envoyed", emails: [
            { id: 8, from: "Rudy", to: "Albator", subject: "Bien ou bié?", date: "22/09/2014", content: "lorem  ippsum uésh mn pote albatz"},
            { id: 9, from: "Rudy", to: "Captaine Flam", subject: "Gloubiboulga", date: "10/09/2014", content: "lorem  ippsum uésh ma flamenkuch"}
        ]   },
        { value: "SPAM" , label: "Courrier indésirable", emails: [
            { id: 10, from: "Rue du discount", to: "Rudy", subject: "envie d'un frigo?", date: "22/09/2014", content: "lorem  ippsum frigo pachér"},
            { id: 10, from: "Steam", to: "Rudy", subject: "too late bruh", date: "25/09/2014", content: "lorem  ippsum <strong>steam</strong> promozion"}
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
