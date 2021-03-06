import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./guard/auth.guard";

const routes: Routes = [
  {
    path: "home",
    loadChildren: () =>
      import("./home/home.module").then((m) => m.HomePageModule),
    canActivate: [AuthGuard],
  },
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full",
  },
  {
    path: "login",
    loadChildren: () =>
      import("./login/login.module").then((m) => m.LoginPageModule),
  },
  {
    path: "signup",
    loadChildren: () =>
      import("./signup/signup.module").then((m) => m.SignupPageModule),
  },
  {
    path: "tournament-detail",
    loadChildren: () =>
      import("./tournament-detail/tournament-detail.module").then(
        (m) => m.TournamentDetailPageModule
      ),
  },
  {
    path: "modal-page-create-team",
    loadChildren: () =>
      import("./modal-page-create-team/modal-page-create-team.module").then(
        (m) => m.ModalPageCreateTeamPageModule
      ),
  },
  {
    path: "modal-registration",
    loadChildren: () =>
      import("./modal-registration/modal-registration.module").then(
        (m) => m.ModalRegistrationPageModule
      ),
  },
  {
    path: "logout",
    loadChildren: () =>
      import("./logout/logout.module").then((m) => m.LogoutPageModule),
  },
  {
    path: "game-detail",
    loadChildren: () =>
      import("./game-detail/game-detail.module").then(
        (m) => m.GameDetailPageModule
      ),
  },
  {
    path: "edit-profile",
    loadChildren: () =>
      import("./edit-profile/edit-profile.module").then(
        (m) => m.ProfilePageModule
      ),
  },
  {
    path: "users",
    loadChildren: () =>
      import("./users/users.module").then((m) => m.UsersPageModule),
  },
  {
    path: "team-detail",
    loadChildren: () =>
      import("./team-detail/team-detail.module").then(
        (m) => m.TeamDetailPageModule
      ),
  },
  {
    path: "user-detail",
    loadChildren: () =>
      import("./user-detail/user-detail.module").then(
        (m) => m.UserDetailPageModule
      ),
  },
  {
    path: "invites",
    loadChildren: () =>
      import("./invites/invites.module").then((m) => m.InvitesPageModule),
  },
  {
    path: "forgot-password",
    loadChildren: () =>
      import("./forgot-password/forgot-password.module").then(
        (m) => m.ForgotPasswordPageModule
      ),
  },
  {
    path: "reset-password",
    loadChildren: () =>
      import("./reset-password/reset-password.module").then(
        (m) => m.ResetPasswordPageModule
      ),
  },  {
    path: 'ticket',
    loadChildren: () => import('./ticket/ticket.module').then( m => m.TicketPageModule)
  },
  {
    path: 'user-tickets',
    loadChildren: () => import('./user-tickets/user-tickets.module').then( m => m.UserTicketsPageModule)
  },
  {
    path: 'bracket-tournament',
    loadChildren: () => import('./bracket-tournament/bracket-tournament.module').then( m => m.BracketTournamentPageModule)
  },
  {
    path: 'buy-credits',
    loadChildren: () => import('./buy-credits/buy-credits.module').then( m => m.BuyCreditsPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
