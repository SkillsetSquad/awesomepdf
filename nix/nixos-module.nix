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

    openFirewall = lib.mkOption {
      type = lib.types.bool;
      default = false;
      description = "Whether to open the firewall port.";
    };
  };

  config = lib.mkIf cfg.enable {
    nixpkgs.overlays = [
      (final: prev: {
        awsomepdf = final.callPackage ./package.nix { };
      })
    ];

    systemd.services.awsomepdf = {
      description = "AwsomePDF PDF Tools";
      after = [ "network.target" ];
      wantedBy = [ "multi-user.target" ];

      environment = {
        AWSOMEPDF_PORT = toString cfg.port;
      };

      serviceConfig = {
        ExecStart = "${cfg.package}/bin/awsomepdf";
        Restart = "on-failure";
        DynamicUser = true;
        RuntimeDirectory = "awsomepdf";
        StateDirectory = "awsomepdf";

        # Hardening
        NoNewPrivileges = true;
        ProtectSystem = "strict";
        ProtectHome = true;
        PrivateTmp = true;
        PrivateDevices = true;
        ProtectKernelTunables = true;
        ProtectKernelModules = true;
        ProtectControlGroups = true;
        RestrictSUIDSGID = true;
        MemoryDenyWriteExecute = false;
      };
    };

    networking.firewall.allowedTCPPorts = lib.mkIf cfg.openFirewall [ cfg.port ];
  };
}
