package extracker.api.controllers;

import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
public class ExpenseController {

    @PutMapping("/api/expense/{expenseId}/remove")
    public void remove(Authentication authentication, @PathVariable int expenseId) throws Exception {
        System.out.printf("[ExpenseController] remove - %d; user - %s\n", expenseId, authentication.getName());
        return;
    }

}
