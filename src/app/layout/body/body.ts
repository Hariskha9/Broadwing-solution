import { Component } from '@angular/core';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-body',
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './body.html',
  styleUrl: './body.css',
})
export class Body {}
