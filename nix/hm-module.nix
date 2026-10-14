{ config, lib, pkgs, ... }:

let
  cfg = config.services.awsomepdf;
in
{
  options.services.awsomepdf = {
    enable = lib.mkEnableOption "AwsomePDF - Professional PDF Tools";

    package = lib.mkOption {
      type = lib.types.package;
      default = pkgs.awsomepdf;
      defaultText = lib.literalExpression "pkgs.awsomepdf";
      description = "The AwsomePDF package to use.";
    };

    port = lib.mkOption {
      type = lib.types.port;
      default = 3000;
      description = "Port to listen on.";
    };
  };

  config = lib.mkIf cfg.enable {
    nixpkgs.overlays = [
      (final: prev: {
        awsomepdf = final.callPackage ./package.nix { };
      })
    ];

    systemd.user.services.awsomepdf = {
      Unit = {
        Description = "AwsomePDF PDF Tools";
        After = [ "network.target" ];
      };

      Service = {
        ExecStart = "${cfg.package}/bin/awsomepdf";
        Restart = "on-failure";
        Environment = [
          "AWSOMEPDF_PORT=${toString cfg.port}"
        ];
      };

      Install = {
        WantedBy = [ "default.target" ];
      };
    };
  };
}
