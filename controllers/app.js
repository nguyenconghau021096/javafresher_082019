    app.controller('mainCtrl', function($scope, $http){
        // $scope.data = {
        //     books: [
        //         {"category": "Category #1", "name": "Book #1", "description": "Some description", "price": "100"},
        //         {"category": "Category #1", "name": "Book #2", "description": "Some description", "price": "200"},
        //         {"category": "Category #2", "name": "Book #3", "description": "Some description", "price": "300"},
        //         {"category": "Category #2", "name": "Book #4", "description": "Some description", "price": "400"},
        //         {"category": "Category #2", "name": "Book #5", "description": "Some description", "price": "500"},
        //         {"category": "Category #3", "name": "Book #6", "description": "Some description", "price": "600"},
        //         {"category": "Category #3", "name": "Book #7", "description": "Some description", "price": "700"},
        //         {"category": "Category #3", "name": "Book #8", "description": "Some description", "price": "800"},
        //         {"category": "Category #3", "name": "Book #9", "description": "Some description", "price": "900"}
        //     ]
        // };
       

        $scope.data = {};
        $http.get('Json/books.json').then(
            function(data){
                console.log(data);
                $scope.data.books = data.data;
            },
            function(error){
                $scope.data.error = error;
            }
        );
        console.log($scope.data);
    });
