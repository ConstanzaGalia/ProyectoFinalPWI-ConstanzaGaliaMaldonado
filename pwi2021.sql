-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 09-08-2021 a las 16:22:15
-- Versión del servidor: 10.4.13-MariaDB
-- Versión de PHP: 7.4.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `pwi2021`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categoria`
--

CREATE TABLE `categoria` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `eliminado` tinyint(1) NOT NULL DEFAULT 0,
  `ts_create` datetime NOT NULL DEFAULT current_timestamp(),
  `ts_update` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Volcado de datos para la tabla `categoria`
--

INSERT INTO `categoria` (`id`, `nombre`, `eliminado`, `ts_create`, `ts_update`) VALUES
(1, 'Entreno Grupal', 0, '2021-05-18 11:33:32', '2021-08-06 15:35:50'),
(2, 'Entrenamiento Personalizado', 0, '2021-06-04 19:35:18', '2021-07-29 16:38:01'),
(3, 'Entrenamiento fuerzas policiales', 0, '2021-07-29 16:41:37', '2021-07-29 16:41:37'),
(4, 'Entrenamiento on line', 0, '2021-07-29 16:42:11', '2021-08-05 21:58:06'),
(5, 'Entrenamiento para Triatlón', 0, '2021-08-06 15:21:00', '2021-08-06 15:21:00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `imagenes-productos`
--

CREATE TABLE `imagenes-productos` (
  `id` int(11) NOT NULL,
  `uid` varchar(255) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `id_producto` int(11) NOT NULL,
  `eliminado` tinyint(1) NOT NULL DEFAULT 0,
  `ts_create` datetime NOT NULL DEFAULT current_timestamp(),
  `ts_update` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Volcado de datos para la tabla `imagenes-productos`
--

INSERT INTO `imagenes-productos` (`id`, `uid`, `id_producto`, `eliminado`, `ts_create`, `ts_update`) VALUES
(1, 'f0fa533b-2ef0-4d78-bf72-5375a2a26e80.png', 9, 0, '2021-07-31 18:34:47', '2021-07-31 18:34:47'),
(2, 'af8ca0c6-032e-4b36-b587-ca0e6746960f.jpeg', 10, 0, '2021-08-02 16:01:41', '2021-08-02 16:01:41'),
(3, '2b004099-d3a9-4014-a1ec-5e107592c827.jpeg', 11, 0, '2021-08-04 12:39:11', '2021-08-04 14:13:55'),
(4, 'cf8f38d2-da56-4eca-a3b4-5701ef29525a.png', 12, 0, '2021-08-08 21:17:02', '2021-08-08 21:17:02'),
(5, 'f2f80f54-2546-484b-b69b-fbffec0432ca.png', 13, 0, '2021-08-08 21:18:44', '2021-08-08 21:18:44'),
(6, '30444083-dd03-477b-94cd-934c047cfc57.png', 14, 0, '2021-08-08 21:21:18', '2021-08-08 21:21:18');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `descripcion` varchar(255) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `precio` int(11) NOT NULL,
  `id_categoria` int(11) NOT NULL,
  `eliminado` tinyint(1) NOT NULL DEFAULT 0,
  `ts_create` datetime NOT NULL DEFAULT current_timestamp(),
  `ts_update` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id`, `nombre`, `descripcion`, `precio`, `id_categoria`, `eliminado`, `ts_create`, `ts_update`) VALUES
(9, 'x3 veces a la semana', 'Orientado a tus objetivos', 3500, 2, 0, '2021-07-31 18:34:47', '2021-08-04 12:03:27'),
(10, 'x4 veces a la semana', 'Entrenamiento para mujeres', 4000, 2, 0, '2021-08-02 16:01:41', '2021-08-02 16:01:41'),
(11, 'x3 veces a la semana', 'Orientado a tus objetivos', 4000, 1, 0, '2021-08-04 12:39:11', '2021-08-04 14:15:17'),
(12, 'x4 veces a la semana', 'Ingreso a la policía federal y gendarmería', 3500, 3, 0, '2021-08-08 21:17:02', '2021-08-08 21:17:02'),
(13, 'x5 veces a la semana', 'Running, Natación, Ciclismo y gimnasio', 5000, 5, 0, '2021-08-08 21:18:44', '2021-08-08 21:18:44'),
(14, 'x2 veces a la semana', 'clases grupales con adaptaciones personalizadas', 2000, 1, 0, '2021-08-08 21:21:18', '2021-08-08 21:21:18');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `rol` tinyint(1) NOT NULL DEFAULT 0,
  `name` varchar(255) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `pass` varchar(255) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `habilitado` tinyint(1) NOT NULL DEFAULT 0,
  `eliminado` tinyint(1) NOT NULL DEFAULT 0,
  `confirmacionMail` varchar(255) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `ts_create` datetime NOT NULL DEFAULT current_timestamp(),
  `ts_update` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `rol`, `name`, `email`, `pass`, `habilitado`, `eliminado`, `confirmacionMail`, `ts_create`, `ts_update`) VALUES
(11, 1, 'Coco', 'coco.galiam@gmail.com', '7c4a8d09ca3762af61e59520943dc26494f8941b', 1, 0, '4abe232b-0a35-4c97-849f-ac993191ed46', '2021-07-27 22:40:26', '2021-08-05 17:01:48'),
(14, 1, 'José Matías Jarillo', 'jarillomat@gmail.com', '7c4a8d09ca3762af61e59520943dc26494f8941b', 1, 0, '63284461-b3cc-491f-baec-d4eded9c4f6f', '2021-08-02 21:27:48', '2021-08-05 17:14:22'),
(15, 0, 'Guadalupe', 'guada@gmail.com', '7c4a8d09ca3762af61e59520943dc26494f8941b', 1, 0, '856e77a6-d7e3-4afa-bcac-2d4b55578134', '2021-08-03 22:34:41', '2021-08-04 14:59:24'),
(17, 0, 'Constanza Galia Maldonado', 'coco@gmail.com', '7c4a8d09ca3762af61e59520943dc26494f8941b', 0, 0, 'beee2eee-d330-4d3a-b775-ed6cad8d87a9', '2021-08-04 10:09:48', '2021-08-04 10:09:48'),
(18, 0, 'Constanza Galia Maldonado', 'coca@gmail.com', '7c4a8d09ca3762af61e59520943dc26494f8941b', 1, 1, 'c0e62334-6f51-4bac-81e6-8c303b09f685', '2021-08-04 10:14:26', '2021-08-05 15:20:16');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `categoria`
--
ALTER TABLE `categoria`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `imagenes-productos`
--
ALTER TABLE `imagenes-productos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_producto` (`id_producto`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_categoria` (`id_categoria`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `categoria`
--
ALTER TABLE `categoria`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `imagenes-productos`
--
ALTER TABLE `imagenes-productos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `imagenes-productos`
--
ALTER TABLE `imagenes-productos`
  ADD CONSTRAINT `imagenes-productos_ibfk_1` FOREIGN KEY (`id_producto`) REFERENCES `productos` (`id`);

--
-- Filtros para la tabla `productos`
--
ALTER TABLE `productos`
  ADD CONSTRAINT `productos_ibfk_1` FOREIGN KEY (`id_categoria`) REFERENCES `categoria` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
