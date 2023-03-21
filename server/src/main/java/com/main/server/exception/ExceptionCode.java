package com.main.server.exception;

import lombok.Getter;

public enum ExceptionCode {

    MEMBER_NOT_FOUND(400, "member not found"),
    BOARD_NOT_FOUND(400, "board not found"),
    ALREADY_LIKED(400, "board not found"),
    MEMBER_EXISTS(400, "member exists"),
    INVALID_TOKEN(400, "invalid token"),
    NO_PERMISSION(400, "no permission"),
    NOT_ALLOWED(400, "Not Allowed");


    @Getter
    private int status;

    @Getter
    private String message;

    ExceptionCode(int status, String message) {
        this.status = status;
        this.message = message;
    }
}