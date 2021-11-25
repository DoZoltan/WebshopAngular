import { Injectable } from '@angular/core';

@Injectable()
export class UrlProvider {
    public readonly MOTHERBOARD: string = 'https://localhost:44397/api/motherboard';
    public readonly CPU: string = 'https://localhost:44397/api/cpu';
    public readonly RAM: string = 'https://localhost:44397/api/ram';
    public readonly SEARCH: string = 'https://localhost:44397/api/search';
}