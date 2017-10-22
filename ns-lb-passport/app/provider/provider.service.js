"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ProviderService = (function () {
    function ProviderService() {
        this.providers = new Array({ id: 'facebook', name: 'Facebook', color: '#3B5998', icon: '&#xf09a;' }, { id: 'twitter', name: 'Twitter', color: '#3B5998', icon: '&#xf099;' });
    }
    ProviderService.prototype.getProviders = function () {
        return this.providers;
    };
    ProviderService.prototype.getProvider = function (id) {
        return this.providers.filter(function (provider) { return provider.id === id; })[0];
    };
    ProviderService = __decorate([
        core_1.Injectable()
    ], ProviderService);
    return ProviderService;
}());
exports.ProviderService = ProviderService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvdmlkZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInByb3ZpZGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFLM0M7SUFEQTtRQUVVLGNBQVMsR0FBRyxJQUFJLEtBQUssQ0FDM0IsRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLEVBQ3hFLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxDQUN2RSxDQUFDO0lBU0osQ0FBQztJQVBDLHNDQUFZLEdBQVo7UUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN4QixDQUFDO0lBRUQscUNBQVcsR0FBWCxVQUFZLEVBQVU7UUFDcEIsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFVBQUEsUUFBUSxJQUFJLE9BQUEsUUFBUSxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQWxCLENBQWtCLENBQUMsQ0FBRSxDQUFDLENBQUUsQ0FBQztJQUNwRSxDQUFDO0lBWlUsZUFBZTtRQUQzQixpQkFBVSxFQUFFO09BQ0EsZUFBZSxDQWEzQjtJQUFELHNCQUFDO0NBQUEsQUFiRCxJQWFDO0FBYlksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAnLi9wcm92aWRlcic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQcm92aWRlclNlcnZpY2Uge1xuICBwcml2YXRlIHByb3ZpZGVycyA9IG5ldyBBcnJheTxQcm92aWRlcj4oXG4gICAgeyBpZDogJ2ZhY2Vib29rJywgbmFtZTogJ0ZhY2Vib29rJywgY29sb3I6ICcjM0I1OTk4JywgaWNvbjogJyYjeGYwOWE7JyB9LFxuICAgIHsgaWQ6ICd0d2l0dGVyJywgbmFtZTogJ1R3aXR0ZXInLCBjb2xvcjogJyMzQjU5OTgnLCBpY29uOiAnJiN4ZjA5OTsnIH0sXG4gICk7XG5cbiAgZ2V0UHJvdmlkZXJzKCk6IFByb3ZpZGVyW10ge1xuICAgIHJldHVybiB0aGlzLnByb3ZpZGVycztcbiAgfVxuXG4gIGdldFByb3ZpZGVyKGlkOiBzdHJpbmcpOiBQcm92aWRlciB7XG4gICAgcmV0dXJuIHRoaXMucHJvdmlkZXJzLmZpbHRlcihwcm92aWRlciA9PiBwcm92aWRlci5pZCA9PT0gaWQpWyAwIF07XG4gIH1cbn1cbiJdfQ==