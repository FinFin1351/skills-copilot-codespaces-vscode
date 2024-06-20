function skillsMember()
{
    return {
        restrict: 'E',
        templateUrl: 'views/skills.html',
        controller: 'skillsCtrl',
        controllerAs: 'skills',
        bindToController: true,
        scope: {
            member: '='
        }
    }
}