package com.consorcio.api.service;

import com.consorcio.api.model.User;
import com.consorcio.api.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public User getCurrentUser() {
        // Aquí implementarías la lógica para obtener el usuario actual
        User user = new User();
        user.setName("FABIAN GARCIA");
        user.setEmail("fabian@example.com");
        return user;
    }

    public void changePassword(String oldPassword, String newPassword) {
        // Implementar lógica de cambio de contraseña
    }

    public void logout() {
        // Implementar lógica de cierre de sesión
    }

    public User updateUser(User updatedUser) {
        User currentUser = getCurrentUser();
        if (updatedUser.getName() != null) currentUser.setName(updatedUser.getName());
        if (updatedUser.getEmail() != null) currentUser.setEmail(updatedUser.getEmail());
        // Actualiza otros campos según sea necesario
        return userRepository.save(currentUser);
    }
} 