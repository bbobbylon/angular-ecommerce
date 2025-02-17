package com.ecommerceapp.spring_boot_ecommerce.dao;

import com.ecommerceapp.spring_boot_ecommerce.entity.Product;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.math.BigDecimal;

//extends the JPA Repository along with the <Entity and Primary Key>
@CrossOrigin("http://localhost:4200")
public interface ProductRepository extends JpaRepository<Product, Long> {
    //Query Method that uses 'id' as a parameter value and match by category id

    //Spring Data REST automatically exposes the endpoint http://localhost:8080/api/products/search/findByCategoryId?id=1
    // where findByCategoryId is the method name and id is the Long id below
    // http://localhost:8080/api/products/search/findByCategoryId?id=1 will give us the books list since we used routerLink = /category/1 in app.component.html
    //behind the scenes, Spring executes a query similar to SELECT * FROM product WHERE category_id=?
    Page<Product> findByCategoryId(@Param("id") Long id, Pageable pageable);
    Page<Product> findByUnitPrice(@Param("unit_price") BigDecimal whatever, Pageable pageable);
}
