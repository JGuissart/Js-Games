/**
 * Created by Julien on 21/04/2015.
 */


var Enfant = function(p, s, a, nbPiece, bestPong) {
    this.Prenom = p;
    this.Sexe = s;
    this.Avatar = a;
    this.NombrePiece = nbPiece;
    this.BestPong = bestPong;
};

/* Setters */

Enfant.prototype.getPrenom = function() {
    return this.Prenom;
};

Enfant.prototype.getSexe = function() {
    return this.Sexe;
};

Enfant.prototype.getAvatar = function() {
    return this.Avatar;
};

Enfant.prototype.getNombrePiece = function() {
    return this.NombrePiece;
};

Enfant.prototype.getBestPong = function() {
    return this.BestPong;
}

/* Setters */

Enfant.prototype.setPrenom = function(prenom) {
    this.Prenom = prenom;
};

Enfant.prototype.setSexe = function(sexe) {
    this.Sexe = sexe;
};

Enfant.prototype.setAvatar = function(avatar) {
    this.Avatar = avatar;
};

Enfant.prototype.setNombrePiece = function(nb) {
    this.NombrePiece = nb;
};

Enfant.prototype.setBestPong = function(bestPong) {
    this.BestPong = bestPong;
}