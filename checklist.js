function checklistCtrl($scope) {
    $scope.todos = [];
    
    $scope.addTodo = function() {
        if($scope.todoText.length != 0) {
            $scope.todos.push({text: $scope.todoText, done: false});
            $scope.todoText='';
        }
    }

    $scope.remaining = function() {
        var count = 0; 
        angular.forEach($scope.todos, function(todo) {
            count += (todo.done ? 0 : 1);
        });
        return count;
    }
    
    $scope.marked = function() {
        $scope.anyMarked=false;
        angular.forEach($scope.todos, function(todo) {
            if(todo.done) {
                $scope.anyMarked=true;
                return
            }
        });
    }
    
    $scope.deleteMarked = function() {
        var notes = $scope.todos;
        $scope.todos = [];
        angular.forEach(notes, function(note){
            if(!note.done)
                $scope.todos.push(note);
        });
        $scope.anyMarked=false;
    }
}