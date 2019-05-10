package extracker.api.controllers;

import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
public class ExpenseController {

    @PutMapping("/api/expense/{expenseId}/remove")
    public void remove(@PathVariable int expenseId) throws Exception {
        System.out.printf("remove - %d\n", expenseId);
        return;
    }

}
