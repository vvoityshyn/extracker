package extracker.api.repositories.impl;

import extracker.api.entities.User;
import extracker.api.repositories.UserRepository;

import java.sql.*;

public class UserRepositoryImpl implements UserRepository {

    private static final String DB_DRIVER = "org.postgresql.Driver";
    private static final String DB_CONNECTION = "jdbc:postgresql://localhost:5432/extracker_db";
    private static final String DB_USER = "postgres";
    private static final String DB_PASSWORD = "123456";

    private static final String INSERT_USER_SQL = "INSERT INTO \"user\" (email, password, first_name, surname, is_active) VALUES (?, ?, ?, ?, ?)";

    public User insert(User user) throws Exception {
        Class.forName(DB_DRIVER);

        try (Connection dbConnection = DriverManager.getConnection(DB_CONNECTION, DB_USER,DB_PASSWORD)) {
            try (PreparedStatement statement = dbConnection.prepareStatement(INSERT_USER_SQL)) {
                statement.setString(1, user.getEmail());
                statement.setString(2, user.getPassword());
                statement.setString(3, user.getFirstName());
                statement.setString(4, user.getSurname());
                statement.setBoolean(5, user.isActive());

                statement.executeUpdate();

                try (ResultSet generatedKeys = statement.getGeneratedKeys()) {
                    if (generatedKeys.next()) {
                        user.setId(generatedKeys.getLong(1));
                    }
                }
            }
            return user;
        }
    }

}
