import { RouteReuseStrategy, ActivatedRouteSnapshot, DetachedRouteHandle } from '@angular/router';
export class CustomStrategy implements RouteReuseStrategy {
    routesStore = [];
    counter = 0;
    // if routes should be detached to reuse later
    shouldDetach(route: ActivatedRouteSnapshot) {
        const now = Date.now();
        console.log('CustomReuseStrategy:shouldDetach', this.counter, now.toString());
        const url: string = route.routeConfig.path;
        const shouldCache: Boolean = route.data.cache;
        return shouldCache &&  !this.routesStore[url];
    }

    // store the detached routes
    store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle) {
        const now = Date.now();
        console.log('CustomReuseStrategy:store', this.counter, now.toString());
        const url = route.routeConfig.path;
        this.routesStore[url] = handle;
    }

    // if already stored routes should be reattached
    shouldAttach(route: ActivatedRouteSnapshot) {
        const now = Date.now();
        console.log('CustomReuseStrategy:shouldAttach', this.counter, now.toString());
        const url = route.routeConfig.path;
        return !!this.routesStore[url];
    }

    // retrieve the routes from store
    retrieve(route: ActivatedRouteSnapshot) {
        const now = Date.now();
        console.log('CustomReuseStrategy:retrieve', this.counter, now.toString());
        const url: string = route.routeConfig.path;
        if (!route.routeConfig) {
            return null;
        }
        return this.routesStore[url];
    }
    // check if routes should be reused at all
    shouldReuseRoute(current: ActivatedRouteSnapshot, future: ActivatedRouteSnapshot): boolean {
      // if now future and current snapshot
      console.log('CustomReuseStrategy:shouldReuseRoute', future, current);
      const now = Date.now();
      this.counter++;

      if (!future.routeConfig && !current.routeConfig) {
        return true;
      }
      if (future.routeConfig) {
        console.log(this.counter, 'future: ', future.routeConfig.path);
      } else {
          console.log(this.counter, 'future: ', future.routeConfig);
      }

      if (current.routeConfig) {
          console.log(this.counter, 'current: ', current.routeConfig.path);
      } else {
          console.log(this.counter, 'current: ', current.routeConfig);
      }
      const shouldReuse = future.routeConfig === current.routeConfig;
      console.log(this.counter, shouldReuse, now.toString());
      return shouldReuse;
    }
}
