"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var provider_service_1 = require("./provider.service");
var ProviderDetailComponent = (function () {
    function ProviderDetailComponent(providerService, route) {
        this.providerService = providerService;
        this.route = route;
    }
    ProviderDetailComponent.prototype.ngOnInit = function () {
        var id = this.route.snapshot.params['id'];
        this.provider = this.providerService.getProvider(id);
    };
    ProviderDetailComponent = __decorate([
        core_1.Component({
            selector: 'ns-details',
            moduleId: module.id,
            templateUrl: './provider-detail.component.html',
        }),
        __metadata("design:paramtypes", [provider_service_1.ProviderService,
            router_1.ActivatedRoute])
    ], ProviderDetailComponent);
    return ProviderDetailComponent;
}());
exports.ProviderDetailComponent = ProviderDetailComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvdmlkZXItZGV0YWlsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInByb3ZpZGVyLWRldGFpbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsMENBQWlEO0FBR2pELHVEQUFxRDtBQU9yRDtJQUdFLGlDQUFvQixlQUFnQyxFQUNoQyxLQUFxQjtRQURyQixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7SUFDekMsQ0FBQztJQUVELDBDQUFRLEdBQVI7UUFDRSxJQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUUsSUFBSSxDQUFFLENBQUM7UUFDOUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBVlUsdUJBQXVCO1FBTG5DLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsWUFBWTtZQUN0QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLGtDQUFrQztTQUNoRCxDQUFDO3lDQUlxQyxrQ0FBZTtZQUN6Qix1QkFBYztPQUo5Qix1QkFBdUIsQ0FXbkM7SUFBRCw4QkFBQztDQUFBLEFBWEQsSUFXQztBQVhZLDBEQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAnLi9wcm92aWRlcic7XG5pbXBvcnQgeyBQcm92aWRlclNlcnZpY2UgfSBmcm9tICcuL3Byb3ZpZGVyLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICducy1kZXRhaWxzJyxcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgdGVtcGxhdGVVcmw6ICcuL3Byb3ZpZGVyLWRldGFpbC5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFByb3ZpZGVyRGV0YWlsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHJvdmlkZXI6IFByb3ZpZGVyO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcHJvdmlkZXJTZXJ2aWNlOiBQcm92aWRlclNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBjb25zdCBpZCA9IHRoaXMucm91dGUuc25hcHNob3QucGFyYW1zWyAnaWQnIF07XG4gICAgdGhpcy5wcm92aWRlciA9IHRoaXMucHJvdmlkZXJTZXJ2aWNlLmdldFByb3ZpZGVyKGlkKTtcbiAgfVxufVxuIl19