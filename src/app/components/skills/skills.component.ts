import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  // skills:any = [
  //   {
  //     id: 1,
  //     src: 'assets/images/Html.png',
  //     title: "HTML",
  //     Style: "",
  //   },
  //   {
  //     id: 2,
  //     src: "assets/images/css.png",
  //     title: "CSS",
  //     Style: "",
  //   },
  //   {
  //     id: 3,
  //     src: "assets/images/javascript.png",
  //     title: "JavaScript",
  //     Style: "",
  //   },
  //   {
  //     id: 4,
  //     src: "assets/images/bootstrap.jfif",
  //     title: "Bootstrap",
  //     Style: "",
  //   },

  //   {
  //     id: 5,
  //     src: "assets/images/angular.png",
  //     title: "Angular",
  //     Style: "",
  //   },
  //   {
  //     id: 6,
  //     src: "assets/images/react.png",
  //     title: "React",
  //     Style: "",
  //   },
  //   {
  //     id: 7,
  //     src: "assets/images/java.jpg",
  //     title: "JAVA",
  //     Style: "",
  //   },

  //   {
  //     id: 8,
  //     src: "assets/images/sql.png",
  //     title: "sql",
  //     Style: "",
  //   },
  //   {
  //     id: 9,
  //     src: "assets/images/mysql.jfif",
  //     title: "MySql",
  //     Style: "",
  //   },
  // ];
  skills:{name:string,level:string,src:string}[]=[
    { name: 'Html5', level: 'Expert',  src: 'assets/images/html-icon.png' },
    { name: 'Css3', level: 'Expert',  src: 'assets/images/css-icon.png' },
    { name: 'Bootstrap', level: 'Expert',  src: 'assets/images/bootstrap-icon.png' },
    { name: 'TailwindCss', level: 'Expert',  src: 'assets/images/tailwind-icon.png' },
    { name: 'JavaScript', level: 'Expert',  src: 'assets/images/javascript-icon.png' },
    { name: 'TypeScript', level: 'Expert', src: 'assets/images/typescript-icon.png'},
    { name: 'Angular', level: 'Expert',  src: 'assets/images/angular-icon.png' },
    { name: 'React', level: 'Intermediate',  src: 'assets/images/react-icon.png' },
    { name: 'Java', level: 'Expert',  src: 'assets/images/java-icon.png' },
    { name: 'Python', level: 'Advanced',  src: 'assets/images/python-icon.png' },
    { name: 'MsSql', level: 'Expert',  src: 'assets/images/mssql-icon.png' },
    { name: 'MySql', level: 'Advanced', src: 'assets/images/mysql-icon.png' },
    { name: 'Git', level: 'Expert',  src: 'assets/images/git-icon.png' },
    { name: 'Docker', level: 'Advanced', src: 'assets/images/docker-icon.png' },
  ]
}
