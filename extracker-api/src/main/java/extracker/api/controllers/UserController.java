package extracker.api.controllers;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import extracker.api.entities.User;
import extracker.api.models.AuthRequest;
import extracker.api.models.UserRegRequest;
import extracker.api.models.UserRegResponse;
import extracker.api.repositories.UserRepository;
import extracker.api.repositories.impl.UserRepositoryImpl;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletResponse;
import java.util.Date;

@RestController
@CrossOrigin
public class UserController {

    private final UserRepository userRepository;

    public UserController() {
        this.userRepository = new UserRepositoryImpl();
    }

    @PostMapping("/api/user/register")
    public UserRegResponse register(@RequestBody UserRegRequest regRequest) throws Exception {

        User newUser = new User();
        newUser.setEmail(regRequest.getEmail());
        newUser.setPassword(regRequest.getPassword());
        newUser.setFirstName(regRequest.getFirstName());
        newUser.setSurname(regRequest.getSurname());
        newUser.setActive(true);

        User insertedUser = this.userRepository.insert(newUser);

        UserRegResponse regResponse = new UserRegResponse();
        regResponse.setUserId(insertedUser.getId());

        return regResponse;
    }

    @PostMapping("/api/user/auth")
    public void authenticate(@RequestBody AuthRequest authRequest, HttpServletResponse response) {

        int expirationTime = 10 * 60 * 1000; // 10 min
        String secret = "SecretKeyToGenJWTs";
        String header = "Authorization";
        String tokenPrefix = "Bearer ";

        long now = System.currentTimeMillis();

        String token = JWT.create()
                .withSubject(authRequest.getUserName())
                .withIssuedAt(new Date(now))
                .withExpiresAt(new Date(now + expirationTime))
                .sign(Algorithm.HMAC512(secret.getBytes()));

        response.addHeader(header, tokenPrefix + token);
        response.setStatus(HttpStatus.NO_CONTENT.value());
    }

}
