"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var provider_service_1 = require("./provider.service");
var ProvidersComponent = (function () {
    function ProvidersComponent(providerService) {
        this.providerService = providerService;
    }
    ProvidersComponent.prototype.ngOnInit = function () {
        this.providers = this.providerService.getProviders();
    };
    ProvidersComponent.prototype.onTap = function (providerId) {
        console.log(providerId);
    };
    ProvidersComponent = __decorate([
        core_1.Component({
            selector: 'ns-providers',
            moduleId: module.id,
            templateUrl: './providers.component.html',
        }),
        __metadata("design:paramtypes", [provider_service_1.ProviderService])
    ], ProvidersComponent);
    return ProvidersComponent;
}());
exports.ProvidersComponent = ProvidersComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvdmlkZXJzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInByb3ZpZGVycy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFHbEQsdURBQXFEO0FBT3JEO0lBR0UsNEJBQW9CLGVBQWdDO1FBQWhDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtJQUFHLENBQUM7SUFFeEQscUNBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN2RCxDQUFDO0lBRUQsa0NBQUssR0FBTCxVQUFNLFVBQWtCO1FBQ3RCLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUE7SUFDekIsQ0FBQztJQVhVLGtCQUFrQjtRQUw5QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGNBQWM7WUFDeEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSw0QkFBNEI7U0FDMUMsQ0FBQzt5Q0FJcUMsa0NBQWU7T0FIekMsa0JBQWtCLENBYTlCO0lBQUQseUJBQUM7Q0FBQSxBQWJELElBYUM7QUFiWSxnREFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJy4vcHJvdmlkZXInO1xuaW1wb3J0IHsgUHJvdmlkZXJTZXJ2aWNlIH0gZnJvbSAnLi9wcm92aWRlci5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnMtcHJvdmlkZXJzJyxcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgdGVtcGxhdGVVcmw6ICcuL3Byb3ZpZGVycy5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFByb3ZpZGVyc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHByb3ZpZGVyczogUHJvdmlkZXJbXTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHByb3ZpZGVyU2VydmljZTogUHJvdmlkZXJTZXJ2aWNlKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMucHJvdmlkZXJzID0gdGhpcy5wcm92aWRlclNlcnZpY2UuZ2V0UHJvdmlkZXJzKCk7XG4gIH1cblxuICBvblRhcChwcm92aWRlcklkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zb2xlLmxvZyhwcm92aWRlcklkKVxuICB9XG5cbn0iXX0=