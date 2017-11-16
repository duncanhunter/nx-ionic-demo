# DemoApp

curl -fsSL https://raw.githubusercontent.com/nrwl/nx/master/packages/install/install.sh | bash -s demo-app

mkdir mobile-apps && cd mobile-apps && ionic start demo-web blank
- Update package.json to share some third party npm packages

ng g app demo-web

ng g ngrx app --module=apps/demo-web/src/app/app.module.ts  --root

ng generate lib demo-core

ng generate ngrx  items --module=libs/demo-core/src/demo-core.module.ts

ng serve --app=demo-web

cd mobile-apps/demo-mobile/ && ionic serve

TODO
? would you share testing?= between mobile or web
? would it be worth trying to share all npm packages between mobile and web
? would you run all tests when checking in 
? would you try and get help from nx/cli to add libs to mobile or manually do that
???? when fleshed out will have more qu
? where does lernajs fit into add functions/api would this nest nx one level deeper as a packgae versus the main root here
