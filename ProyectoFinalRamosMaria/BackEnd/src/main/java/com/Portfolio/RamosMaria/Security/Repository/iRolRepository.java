package com.Portfolio.RamosMaria.Security.Repository;

import com.Portfolio.RamosMaria.Security.Entity.Rol;
import com.Portfolio.RamosMaria.Security.Enums.RolNombre;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface iRolRepository extends JpaRepository<Rol, Integer>{
    Optional<Rol> findByRolNombre(RolNombre rolNombre);
}
