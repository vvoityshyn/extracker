package extracker.api.filters;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.ArrayList;

public class JWTAuthorizationFilter extends BasicAuthenticationFilter {

    public JWTAuthorizationFilter(AuthenticationManager authManager) {
        super(authManager);
    }

    @Override
    protected void doFilterInternal(HttpServletRequest req,
                                    HttpServletResponse res,
                                    FilterChain chain) throws IOException, ServletException {

        int expirationTime = 10 * 60 * 1000; // 10 min
        String secret = "SecretKeyToGenJWTs";
        String headerName = "Authorization";
        String tokenPrefix = "Bearer ";

        String header = req.getHeader(headerName);

        if (header == null || !header.startsWith(tokenPrefix)) {
            chain.doFilter(req, res);
            return;
        }

        String user = JWT.require(Algorithm.HMAC512(secret.getBytes()))
                .build()
                .verify(header.replace(tokenPrefix, ""))
                .getSubject();

        UsernamePasswordAuthenticationToken authentication =
                user != null
                ? new UsernamePasswordAuthenticationToken(user, null, new ArrayList<>())
                : null;

        SecurityContextHolder.getContext().setAuthentication(authentication);
        chain.doFilter(req, res);
    }

}
